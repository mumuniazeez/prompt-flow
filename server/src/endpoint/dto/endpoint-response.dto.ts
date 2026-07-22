import { ApiProperty } from '@nestjs/swagger';
import { Endpoint, EndpointMethod } from '../../../generated/prisma';

export class EndpointResponseDto implements Endpoint {
  @ApiProperty({
    description: 'id of the endpoint',
  })
  id!: string;
  @ApiProperty({
    description: 'name of the endpoint',
  })
  name!: string;
  @ApiProperty({
    description: 'description of the endpoint',
  })
  description!: string;
  @ApiProperty({
    description: 'method of the endpoint',
    enum: EndpointMethod,
  })
  method!: EndpointMethod;
  @ApiProperty({
    description: 'route of the endpoint',
  })
  route!: string;
  @ApiProperty({
    description: 'project the endpoint belongs to',
  })
  projectId!: string;
  @ApiProperty({
    description: 'the date the endpoint was created',
  })
  createdAt!: Date;
  @ApiProperty({
    description: 'the last time the endpoint was updated',
  })
  updatedAt!: Date;
  @ApiProperty({
    description: 'id of the response scheme',
  })
  responseSchemaId!: string;
}
