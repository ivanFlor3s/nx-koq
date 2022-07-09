import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignUpDto,AuthSignInDto } from '../../dto-models/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){

    }

    @Post('signup')
    async signUp(@Body() dto:AuthSignUpDto){
        const user = await this.authService.signUp(dto)
        return user
    }

    @Post('signin')
    async signIn(@Body() dto:AuthSignInDto){
        const user = await this.authService.signIn(dto)
        return user;
    }
}
