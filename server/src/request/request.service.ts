import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RequestService {
  constructor(private readonly prisma: PrismaService) {}

  async getResponse(
    projectId: string,
    endpointId: string,
    requestMethod: string,
  ) {
    return {
      projectId,
      endpointId,
      requestMethod,
    };
  }
}
