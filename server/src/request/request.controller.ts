import { All, Controller, Param, ParseUUIDPipe, Req } from '@nestjs/common';
import { RequestService } from './request.service';
import type { Request } from 'express';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @All(':projectId/:endpointId')
  async getResponse(
    @Param('projectId', ParseUUIDPipe) projectId: string,
    @Param('endpointId', ParseUUIDPipe) endpointId: string,
    @Req() req: Request,
  ) {
    return this.requestService.getResponse(projectId, endpointId, req.method);
  }
}
