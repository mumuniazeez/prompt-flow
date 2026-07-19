import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  signUp(callbackUrl: string) {
    if (!callbackUrl) throw new BadRequestException('callbackUrl is required');
    return 'This is Sign Up';
  }
}
