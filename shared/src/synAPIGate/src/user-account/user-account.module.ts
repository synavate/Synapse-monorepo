import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserAccountService } from './user-account.service';
import { UserAccountController } from './user-account.controller';

@Module({
  imports: [HttpModule],
  providers: [UserAccountService],
  controllers: [UserAccountController],
})
export class UserAccountModule {}