import {
  BadRequestException,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class GoogleGuard extends AuthGuard('google') {
  getAuthenticateOptions(context: ExecutionContext) {
    const req: Request & { query: { callbackURL?: string; state?: string } } =
      context.switchToHttp().getRequest();

    if (!req.query.callbackURL && !req.query.state)
      throw new BadRequestException('callbackURL is required');

    const state = req.query.callbackURL || req.query.state;

    const failureRedirect = `${state}?error=Google authentication failed`;

    return {
      state,
      failureRedirect,
    };
  }
}
