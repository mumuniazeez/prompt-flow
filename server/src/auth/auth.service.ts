import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GoogleAuthPayloadDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  googleCallback(
    payload: GoogleAuthPayloadDto,
    callbackUrl: string,
  ): { url: string } {
    console.log(payload);
    if (!payload || !payload.token || !payload.user)
      return { url: `${callbackUrl}?error=No user payload returned` };

    return { url: `${callbackUrl}?access_token=${payload.token}` };
  }
}
