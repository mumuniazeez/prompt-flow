import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../../generated/prisma';

export class UserResponseDto implements User {
  @ApiProperty({
    description: 'The id of the  user',
  })
  id!: string;
  @ApiProperty({
    description: 'The first name of the  user',
  })
  firstName!: string;
  @ApiProperty({
    description: 'The last name of the  user',
  })
  lastName!: string;
  @ApiProperty({
    description: 'The email of the  user',
  })
  email!: string;
  @ApiProperty({
    description: 'The profile picture of the  user',
    nullable: true,
    type: 'string',
  })
  profileImage!: string | null;
  @ApiProperty({
    description: 'The date the user account was created',
    nullable: true,
  })
  createdAt!: Date;
  @ApiProperty({
    description: 'The last date the user account was updated',
    nullable: true,
  })
  updatedAt!: Date;
}
