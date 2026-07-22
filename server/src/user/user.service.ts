import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UserResponseDto } from './dto';
import { GeneralOkResponseDto } from '../dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getMe(userId: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new BadRequestException('User not found');

    return user;
  }

  async update(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new BadRequestException('User not found');

    return this.prisma.user.update({
      where: { id: userId },
      data: { ...updateUserDto },
    });
  }

  async remove(userId: string): Promise<GeneralOkResponseDto> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new BadRequestException('User not found');

    await this.prisma.user.delete({ where: { id: userId } });

    return { message: 'User account deleted' };
  }
}
