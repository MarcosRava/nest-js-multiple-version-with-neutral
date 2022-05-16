import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';

@Controller({
  path: 'version',
  version: [VERSION_NEUTRAL, 'v2'],
})
export class VersionController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
