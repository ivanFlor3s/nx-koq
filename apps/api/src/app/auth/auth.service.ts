/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import * as argon from 'argon2'
import { AuthDto } from '../../dto-models/auth.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}

    async signUp(dto:AuthDto){
        const hash = await argon.hash(dto.password);
        const {email, imageUrl} = dto
        const user = await this.prisma.user.create({
            data:{
                email,
                hash,
                imageUrl
            },
            //Defino los campos que quiero devolver
            select:{
                id:true,
                email: true,
                createdAt:true,
            }
        })
        
        //Tambien puedo hacer
        // delete user.hash

        return user
    }
}
