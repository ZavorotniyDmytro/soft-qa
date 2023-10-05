import { ConfigModule } from './config/configmodule.module';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule, 
    UserModule, 
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
