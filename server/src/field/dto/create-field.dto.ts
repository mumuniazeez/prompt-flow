import { ApiProperty } from '@nestjs/swagger';
import { Field, FieldDataType } from '../../../generated/prisma';

export class CreateFieldDto implements Partial<Field> {
  @ApiProperty({
    description: 'name of the field',
  })
  name!: string;

  @ApiProperty({
    description: 'description of the field',
  })
  description!: string | null;

  @ApiProperty({
    description: 'datatype of the field',
    enum: FieldDataType,
  })
  datatype!: FieldDataType;

  @ApiProperty({
    description: 'responseScheme the field is under',
  })
  responseSchemaId!: string;
}
