import { Injectable } from '@nestjs/common'
import {PassportStrategy} from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(private config: ConfigService, private prisma: PrismaService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get('SECRET_KEY')
        })
    }

    //TODO sacar probecho del validate
    async validate(payload: {sub:number, email:string}){

        const user = await  this.prisma.user.findUnique({
            where:{
                id: payload.sub
            }
        })
        delete user.hash
        return user
    }
}
