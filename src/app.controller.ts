import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':text')
  printText(@Param('text') text: string): string {
    return this.appService.printText(text);
  }

  @Post()
  printWhatSent(@Body('text') text: string): string {
    return this.appService.printWhatSent(text);
  }
}
