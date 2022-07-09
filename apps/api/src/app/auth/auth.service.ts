/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Injectable } from '@nestjs/common';
import { Message } from 'libs/api-interfaces/src/lib/api-interfaces';

@Injectable()
export class AuthService {

    signUp():Message{
        return {message:'Te logueaste'}
    }
}
