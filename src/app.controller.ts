import { Controller, Get } from '@nestjs/common';
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
  getMazur(): string {
    return this.mazurService.getScream();
  }
}
