import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

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

  getProp(prop_name: string): string {
    switch (prop_name) {
      case 'age':
        return '20';
        break;

      default:
        return '<h1>Hello there.</h1>';
        break;
    }
  }
}
