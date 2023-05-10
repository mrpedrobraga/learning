import { Controller, Get, Query } from '@nestjs/common';
import { AppService, MazurService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mazurService: MazurService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getGoodbye();
  }

  @Get('/mazur')
  getMazur(@Query('prop') prop: string): string {
    console.log(`The property is '${prop}'.`);
    return this.mazurService.getProp(prop);
  }
}
