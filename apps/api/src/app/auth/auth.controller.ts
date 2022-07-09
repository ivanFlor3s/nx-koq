import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignUpDto } from '../../dto-models/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){

    }

    @Post('signup')
    async signUp(@Body() dto:AuthSignUpDto){
        const user = await this.authService.signUp(dto)
        return user
    }

}
