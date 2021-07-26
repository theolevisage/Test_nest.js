import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  printText(text: string): string {
    return `Print text dans ma route en get avec un paramètre retourne => ${text}`;
  }

  printWhatSent(text: any): string {
    return `Print what sent dans ma route en post avec un NICE BODY DAZE retourne => ${text}`;
  }
}
