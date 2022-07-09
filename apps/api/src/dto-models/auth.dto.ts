import { AuthDto as AuthInterface } from "@nx-koq/api-interfaces";
import {IsBoolean, IsEmail, IsNotEmpty, IsString, IsUrl} from 'class-validator'

export class AuthDto implements AuthInterface{

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @IsString()
    @IsUrl()
    imageUrl: string;

    @IsNotEmpty()
    @IsBoolean()
    googleAcount: boolean;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

}