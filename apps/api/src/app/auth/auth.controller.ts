import { Body, Controller, HttpCode, Post, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignUpDto,AuthSignInDto } from '../../dto-models/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){

    }

    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    async signUp(@Body() dto:AuthSignUpDto){
        const user = await this.authService.signUp(dto)
        return user
    }

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    async signIn(@Body() dto:AuthSignInDto){
        const user = await this.authService.signIn(dto)
        return user;
    }
}
