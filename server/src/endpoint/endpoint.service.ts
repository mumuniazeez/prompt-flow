import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
      where: {
        id: createEndpointDto.projectId,
        userId,
      },
      include: {
        endpoints: {
          where: {
            method: createEndpointDto.method,
            route: createEndpointDto.route,
          },
        },
      },
    });

    if (!project) throw new NotFoundException('Project not found');

    if (project.endpoints.length !== 0)
      throw new ConflictException(
        `"${createEndpointDto.method} ${createEndpointDto.route} already exist`,
      );

    const endpoint = await this.prisma.endpoint.create({
      data: {
        ...createEndpointDto,
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
      throw new NotFoundException('No endpoints yet');
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

    const endpointAlreadyExist = await this.prisma.endpoint.findFirst({
      where: {
        method: updateEndpointDto.method,
        route: updateEndpointDto.route,
        projectId: endpoint.projectId,
      },
      select: {},
    });

    if (endpointAlreadyExist)
      throw new ConflictException(
        `"${updateEndpointDto.method} ${updateEndpointDto.route} already exist`,
      );

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
