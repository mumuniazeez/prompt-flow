import { ApiProperty } from '@nestjs/swagger';
import { Field, FieldDataType } from '../../../generated/prisma';

export class FieldResponseDto implements Field {
  @ApiProperty({ description: 'id of the field' })
  id!: string;
  @ApiProperty({ description: 'name of the field' })
  name!: string;
  @ApiProperty({ description: 'description of the field' })
  description!: string | null;
  @ApiProperty({ description: 'datatype of the field', enum: FieldDataType })
  datatype!: FieldDataType;
  @ApiProperty({ description: 'the date this field was createAt' })
  createdAt!: Date;
  @ApiProperty({ description: 'last date this field was updated' })
  updatedAt!: Date;
  @ApiProperty({ description: 'the response schema id this field is under' })
  responseSchemaId!: string;
}
