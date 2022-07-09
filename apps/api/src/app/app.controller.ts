import { Controller, Get } from '@nestjs/common';

import { Message } from '@nx-koq/api-interfaces';


@Controller()
export class AppController {

  @Get('hello')
  getData(): Message {
    return {message:'Tomatela te dije'}
  }
}
