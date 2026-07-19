import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Signin or Signup using Google OAuth ',
    description: 'Get redirected to google oauth authentication page',
  })
  @ApiResponse({ status: 207, description: 'Redirection to google oauth page' })
  @ApiQuery({
    name: 'callbackUrl',
    description: 'The url to navigate to after authentication is completed',
  })
  @Get('/google')
  @HttpCode(HttpStatus.TEMPORARY_REDIRECT)
  signUp(@Query('callbackUrl') callbackUrl: string) {
    return this.authService.signUp();
  }
}
