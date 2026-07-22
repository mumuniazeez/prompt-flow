import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { EndpointService } from './endpoint.service';
import { CreateEndpointDto } from './dto/create-endpoint.dto';
import { UpdateEndpointDto } from './dto/update-endpoint.dto';
import { JwtGuard } from '../auth/guard';
import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { GetUser } from '../auth/decorator';

@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('endpoint')
export class EndpointController {
  constructor(private readonly endpointService: EndpointService) {}

  @Post()
  create(
    @Body() createEndpointDto: CreateEndpointDto,
    @GetUser('id') userId: string,
  ) {
    return this.endpointService.create(createEndpointDto, userId);
  }

  @ApiParam({
    name: 'projectId',
    description: 'The id of the project this endpoint is under',
    required: true,
    type: 'string',
  })
  @Get(':projectId')
  findAll(
    @Param('projectId', ParseUUIDPipe) projectId: string,
    @GetUser('id') userId: string,
  ) {
    return this.endpointService.findAll(projectId, userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.endpointService.findOne(id, userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEndpointDto: UpdateEndpointDto,
    @GetUser('id') userId: string,
  ) {
    return this.endpointService.update(id, updateEndpointDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.endpointService.remove(id, userId);
  }
}
