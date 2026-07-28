import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RequestService {
  constructor(private readonly prisma: PrismaService) {}

  async getResponse(
    projectId: string,
    endpointId: string,
    requestMethod: string,
  ) {
    const project = await this.prisma.project.findUnique({
      where: { id: projectId },
      include: { endpoints: { where: { id: endpointId } } },
    });

    if (!project) throw new NotFoundException('Project not found');
    if (project.endpoints.length === 0)
      throw new NotFoundException('Endpoint not found');

    return {
      project,
      requestMethod,
    };
  }
}
