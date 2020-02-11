import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [
    UserService,
    UserResolver
  ],
  imports: [
    SharedModule
  ]
})
export class UserModule {}
