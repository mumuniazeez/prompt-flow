import { ApiProperty } from '@nestjs/swagger';
import { Project } from '../../../generated/prisma';

export class ProjectResponseDto implements Project {
  @ApiProperty({
    description: 'id of the project',
  })
  id!: string;
  @ApiProperty({
    description: 'name of the project',
  })
  name!: string;
  @ApiProperty({
    description: 'description of the project',
  })
  description!: string;
  @ApiProperty({
    description: 'userId of the owner of the project',
  })
  userId!: string;
  @ApiProperty({
    description: 'the date when the project was created',
  })
  createdAt!: Date;
  @ApiProperty({
    description: 'the date the project was last updated',
  })
  updatedAt!: Date;
}
