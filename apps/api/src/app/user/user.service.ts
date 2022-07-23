import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService){}
    
    async getAll(){
      return  this.prisma.user.findMany() 
    }
}
