import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { OAuthStrategy } from 'passport-google-oauth';

@Injectable()
export class GoogleStrategy extends PassportStrategy(OAuthStrategy, 'google') {
  constructor(private readonly config: ConfigService) {
    super({});
  }

  //   TODO: Add JWT validation
  validate() {}
}
