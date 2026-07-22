import { IsEnum, IsString, IsUUID } from 'class-validator';
import { Endpoint, EndpointMethod } from '../../../generated/prisma';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEndpointDto implements Partial<Endpoint> {
  @ApiProperty({
    description: 'The name of the endpoint',
  })
  @IsString()
  name!: string;
  @ApiProperty({
    description: 'The description of the endpoint',
  })
  @IsString()
  description!: string;

  @ApiProperty({
    description: 'The description of the endpoint',
    enum: EndpointMethod,
  })
  @IsEnum(EndpointMethod)
  method!: EndpointMethod;

  @ApiProperty({
    description: 'The route of the endpoint',
  })
  @IsString()
  route!: string;

  @ApiProperty({
    description: 'The project the endpoint belongs to',
  })
  @IsUUID()
  projectId!: string;
}
