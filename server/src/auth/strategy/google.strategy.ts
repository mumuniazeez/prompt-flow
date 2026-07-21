/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile, VerifyCallback } from 'passport-google-oauth20';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {
    super({
      clientID: config.get('GOOGLE_OATH_CLIENT_ID')!,
      clientSecret: config.get('GOOGLE_OATH_CLIENT_SECRET')!,
      callbackURL: `${config.get('APP_URL')}/v1/auth/google/callback`,
      scope: ['email', 'profile'],
    });
  }

  //   TODO: Add JWT validation
  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) {
    const email = profile.emails?.[0]?.value;
    const firstName = profile.name?.givenName;
    const lastName = profile.name?.familyName;
    const profileImage = profile.photos?.[0]?.value || null;

    if (!email)
      return done(new Error('No email returned from Google', undefined));

    let user = await this.prisma.user.findFirst({
      where: { email },
    });

    if (!user)
      user = await this.prisma.user.create({
        data: {
          firstName: firstName!,
          lastName: lastName!,
          email,
          profileImage,
        },
      });
    else {
      const needUpdate = user.profileImage !== profileImage;
      if (needUpdate)
        user = await this.prisma.user.update({
          where: { email },
          data: { profileImage: profileImage || user.profileImage },
        });
    }

    const tokenPayload = {
      id: user.id,
      email: user.email,
    };

    const token = this.jwt.sign(tokenPayload, {
      expiresIn: '30d',
      secret: this.config.get('JWT_ACCESS_TOKEN_SECRET'),
    });

    return done(null, { user, token });
  }
}
