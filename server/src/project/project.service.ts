import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ProjectResponseDto } from './dto';
import { GeneralOkResponseDto } from '../dto';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createProjectDto: CreateProjectDto,
    userId: string,
  ): Promise<ProjectResponseDto> {
    const project = await this.prisma.project.create({
      data: {
        ...createProjectDto,
        userId,
      },
    });

    return project;
  }

  async findAll(userId: string): Promise<ProjectResponseDto[]> {
    const projects = await this.prisma.project.findMany({ where: { userId } });

    if (projects.length === 0) throw new NotFoundException('No project yet');

    return projects;
  }

  async findOne(id: string): Promise<ProjectResponseDto> {
    const project = await this.prisma.project.findUnique({ where: { id } });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  async update(
    id: string,
    updateProjectDto: UpdateProjectDto,
    userId: string,
  ): Promise<ProjectResponseDto> {
    const project = await this.prisma.project.findUnique({ where: { id } });
    if (!project) throw new NotFoundException('Project not found');

    if (project.userId !== userId)
      throw new ForbiddenException('You can not  update this project');

    return this.prisma.project.update({
      where: { id },
      data: {
        ...updateProjectDto,
      },
    });
  }

  async remove(id: string, userId: string): Promise<GeneralOkResponseDto> {
    const project = await this.prisma.project.findUnique({ where: { id } });

    if (!project) throw new NotFoundException('Project not found');

    if (project.userId !== userId)
      throw new ForbiddenException('You can not update this project');

    await this.prisma.project.delete({ where: { id } });

    return { message: 'Project deleted successfully' };
  }
}
