import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, MazurService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MazurService],
})
export class AppModule {}
