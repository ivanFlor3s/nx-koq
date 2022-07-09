export interface AuthSignUpDto {
    email:string
    // name:string,
    // lastname:string
    imageUrl: string,
    phoneNumber: string
    googleAcount:boolean
    password: string
}

export interface AuthSignInDto {
    email:string
    password: string
}

export interface AuthGoogleSignInDto {
    email
}