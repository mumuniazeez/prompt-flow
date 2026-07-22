import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthCheck } from '@nestjs/terminus';

@Controller({
  path: 'health',
  version: VERSION_NEUTRAL,
})
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @HealthCheck()
  @Get('/')
  healthCheck() {
    return this.healthService.healthCheck();
  }
}
