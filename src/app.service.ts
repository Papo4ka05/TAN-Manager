import { Injectable } from '@nestjs/common';
import { formatDate } from './libs/helpers';

@Injectable()
export class AppService {
  getHello(): string {
    return formatDate();
  }
}
