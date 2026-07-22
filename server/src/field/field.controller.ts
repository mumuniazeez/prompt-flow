import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FieldService } from './field.service';
import { CreateFieldDto, UpdateFieldDto } from './dto';
import { JwtGuard } from '../auth/guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { GetUser } from '../auth/decorator';

@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Post()
  create(
    @Body() createFieldDto: CreateFieldDto,
    @GetUser('id') userId: string,
  ) {
    return this.fieldService.create(createFieldDto, userId);
  }

  @Get()
  findAll() {
    return this.fieldService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fieldService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFieldDto: UpdateFieldDto) {
    return this.fieldService.update(+id, updateFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldService.remove(+id);
  }
}
