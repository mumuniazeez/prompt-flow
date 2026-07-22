import { IsString } from 'class-validator';
import { Project } from '../../../generated/prisma';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto implements Partial<Project> {
  @ApiProperty({
    description: 'The name of the project',
  })
  @IsString()
  name!: string;
  @ApiProperty({
    description: 'The description of the project',
  })
  @IsString()
  description!: string;
}
