import { Controller, Get, HttpCode, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express'
import {User} from '@prisma/client'
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @HttpCode(HttpStatus.OK)
    @Get('me')
    getMe(@GetUser() user: User){
        return user;
    }

    @HttpCode(HttpStatus.OK)
    @Get('all')
    async getUsers(){
        const users = await this.userService.getAll()
        return users
    }
}