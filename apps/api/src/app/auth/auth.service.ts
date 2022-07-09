/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import * as argon from 'argon2';
import { AuthSignInDto, AuthSignUpDto } from '../../dto-models/auth.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUp(dto: AuthSignUpDto) {
    const hash = await argon.hash(dto.password);
    const { email, imageUrl, phoneNumber } = dto;
    try {
      const user = await this.prisma.user.create({
        data: {
          email,
          hash,
          imageUrl,
          phoneNumber,
        },
        //Defino los campos que quiero devolver
        select: {
          id: true,
          email: true,
          createdAt: true,
        },
      });

      //Tambien puedo hacer
      // delete user.hash

      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signIn(dto: AuthSignInDto) {

    //Find user
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { email: dto.email }
    });

    //compare 
    const passMatch = await argon.verify(user.hash,dto.password)
    if(!passMatch)
        throw new ForbiddenException('Password is incorrect')
    
    delete user.hash
    return user;
  }
}
