/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly config: ConfigService) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    super({
      clientID: '',
      clientSecret: '',
      callbackURL: '',
      scope: ['email'],
    });
  }

  //   TODO: Add JWT validation
  validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { name, emails } = profile;
    return {
      email: emails![0]?.value,
      firstName: name?.givenName,
      lastName: name?.familyName,
    };
  }
}
