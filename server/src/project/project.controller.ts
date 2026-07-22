import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiBearerAuth, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { GetUser } from '../auth/decorator';
import { ProjectResponseDto } from './dto';

@ApiBearerAuth()
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @ApiOperation({
    summary: 'Create a new project',
    description: 'Create a new project',
  })
  @ApiOkResponse({
    type: ProjectResponseDto,
  })
  @Post()
  create(
    @Body() createProjectDto: CreateProjectDto,
    @GetUser('id') userId: string,
  ) {
    return this.projectService.create(createProjectDto, userId);
  }

  @ApiOperation({
    summary: 'Find all project',
    description: 'Find all project created by the current user',
  })
  @ApiOkResponse({
    type: [ProjectResponseDto],
  })
  @Get()
  findAll(@GetUser('id') userId: string) {
    return this.projectService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}
