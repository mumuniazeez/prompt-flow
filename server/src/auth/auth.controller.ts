import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  Redirect,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { GoogleGuard } from './guard';
import { GetUser } from './decorator';
import { GoogleAuthPayloadDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Signin or Signup using Google OAuth ',
    description: 'Get redirected to google oauth authentication page',
  })
  @ApiResponse({ status: 307, description: 'Redirection to google oauth page' })
  @ApiQuery({
    name: 'callbackURL',
    description:
      'The url to navigate to after authentication is completed. This query will be added when the backend redirects to the callback url `?access_token={access_token}&refresh_token={refresh_token}` or `?error={error_message}` if request fails',
  })
  @UseGuards(GoogleGuard)
  @Get('/google')
  @HttpCode(HttpStatus.TEMPORARY_REDIRECT)
  google() {}

  @ApiOperation({
    summary: 'Google authentication callback for backend',
    description: 'This is a callback from google',
  })
  @UseGuards(GoogleGuard)
  @Redirect()
  @Get('/google/callback')
  googleCallback(
    @GetUser() payload: GoogleAuthPayloadDto,
    @Query('state') callbackURL: string,
  ) {
    return this.authService.googleCallback(payload, callbackURL);
  }
}
