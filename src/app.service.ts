import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGoodbye(): string {
    return 'Goodbye...';
  }
}

@Injectable()
export class MazurService {
  getScream(): string {
    return 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa';
  }
}
