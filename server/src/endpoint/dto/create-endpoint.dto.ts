import {
  IsEnum,
  IsJSON,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import {
  Endpoint,
  EndpointMethod,
  FieldDataType,
} from '../../../generated/prisma';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';

export class FieldDto {
  @ApiProperty({
    description: 'name of the field without space',
  })
  @IsString()
  name!: string;

  @ApiProperty({
    description: 'description of the field without space',
    nullable: true,
    type: 'string',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string | null = null;

  @ApiProperty({
    description: 'name of the field without space',
    enum: FieldDataType,
  })
  @IsEnum(FieldDataType)
  datatype!: FieldDataType;

  @ApiProperty({
    type: () => [FieldDto],
    description: 'Sub field in the endpoint',
    required: false,
  })
  @IsOptional()
  @IsJSON()
  @IsObject({ each: true })
  @Transform((value) => value || [])
  subField!: FieldDto[];
}

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

  @ApiProperty({
    type: [FieldDto],
    description: 'Response fields in the endpoint',
  })
  @IsJSON()
  @IsObject({ each: true })
  @Type(() => FieldDto)
  responseFields!: any;
}
