import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Req,
} from '@nestjs/common';
import { RequestService } from './request.service';
import type { Request } from 'express';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get(':projectId/:endpointId')
  @Post(':projectId/:endpointId')
  async getResponse_(
    @Param('projectId', ParseUUIDPipe) projectId: string,
    @Param('endpointId', ParseUUIDPipe) endpointId: string,
    @Req() req: Request,
  ) {
    return this.requestService.getResponse(projectId, endpointId, req.method);
  }
}
