import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../../generated/prisma';
import { IsString } from 'class-validator';

export class CreateUserDto implements Partial<User> {
  @ApiProperty({
    description: 'The first name of the  user',
  })
  @IsString()
  firstName!: string;

  @ApiProperty({
    description: 'The last name of the  user',
  })
  @IsString()
  lastName!: string;
}
