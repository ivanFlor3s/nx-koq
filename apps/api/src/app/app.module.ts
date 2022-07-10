import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SharedModule, 
    AuthModule, 
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:'../.env'
    })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
