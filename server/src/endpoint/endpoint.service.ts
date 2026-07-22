import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateEndpointDto,
  EndpointResponseDto,
  UpdateEndpointDto,
} from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { GeneralOkResponseDto } from '../dto';

@Injectable()
export class EndpointService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createEndpointDto: CreateEndpointDto,
    userId: string,
  ): Promise<EndpointResponseDto> {
    const project = await this.prisma.project.findUnique({
      where: { id: createEndpointDto.projectId, userId },
    });

    if (!project) throw new NotFoundException('Project not found');

    const responseSchema = await this.prisma.responseSchema.create({});

    const endpoint = await this.prisma.endpoint.create({
      data: {
        ...createEndpointDto,
        responseSchemaId: responseSchema.id,
      },
    });

    return endpoint;
  }

  async findAll(
    projectId: string,
    userId: string,
  ): Promise<EndpointResponseDto[]> {
    const project = await this.prisma.project.findUnique({
      where: { id: projectId, userId },
      include: { endpoints: true },
    });
    if (!project) throw new NotFoundException('Project not found');

    if (project.endpoints.length === 0)
      throw new NotFoundException('No endpoint yet');
    return project.endpoints;
  }

  async findOne(id: string, userId: string): Promise<EndpointResponseDto> {
    const endpoint = await this.prisma.endpoint.findUnique({
      where: { id, project: { userId } },
    });

    if (!endpoint) throw new NotFoundException('Endpoint not found');

    return endpoint;
  }

  async update(
    id: string,
    updateEndpointDto: UpdateEndpointDto,
    userId: string,
  ): Promise<EndpointResponseDto> {
    const endpoint = await this.prisma.endpoint.findUnique({
      where: { id, project: { userId } },
    });

    if (!endpoint) throw new NotFoundException('Endpoint not found');

    return this.prisma.endpoint.update({
      where: { id },
      data: { ...updateEndpointDto },
    });
  }

  async remove(id: string, userId: string): Promise<GeneralOkResponseDto> {
    const endpoint = await this.prisma.endpoint.findUnique({
      where: { id, project: { userId } },
    });

    if (!endpoint) throw new NotFoundException('Endpoint not found');

    await this.prisma.endpoint.delete({ where: { id } });

    return { message: 'Endpoint deleted successfully' };
  }
}
