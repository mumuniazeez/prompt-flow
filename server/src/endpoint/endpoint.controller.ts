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
import { ApiBearerAuth, ApiOperation, ApiParam } from '@nestjs/swagger';
import { GetUser } from '../auth/decorator';

@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('endpoint')
export class EndpointController {
  constructor(private readonly endpointService: EndpointService) {}

  @ApiOperation({
    summary: 'Create a new endpoint',
    description: 'Create a new endpoint under a project',
  })
  @ApiParam({
    name: 'projectId',
    description: 'The id of the project this endpoint is under',
    required: true,
    type: 'string',
  })
  @Post(':projectId')
  create(
    @Body() createEndpointDto: CreateEndpointDto,
    @GetUser('id') userId: string,
  ) {
    return this.endpointService.create(createEndpointDto, userId);
  }

  @ApiOperation({
    summary: 'Find all endpoints',
    description: 'Find all endpoints under a project',
  })
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

  @ApiOperation({
    summary: 'Find one endpoints',
    description: 'Find one endpoints under a project',
  })
  @Get(':id')
  findOne(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.endpointService.findOne(id, userId);
  }

  @ApiOperation({
    summary: 'Update one endpoints',
    description: 'Update one endpoints under a project',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEndpointDto: UpdateEndpointDto,
    @GetUser('id') userId: string,
  ) {
    return this.endpointService.update(id, updateEndpointDto, userId);
  }

  @ApiOperation({
    summary: 'Delete one endpoints',
    description: 'Delete one endpoints under a project',
  })
  @Delete(':id')
  remove(@Param('id') id: string, @GetUser('id') userId: string) {
    return this.endpointService.remove(id, userId);
  }
}
