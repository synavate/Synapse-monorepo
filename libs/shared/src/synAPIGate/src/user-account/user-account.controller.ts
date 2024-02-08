import { Controller, Get, Param, HttpException } from '@nestjs/common';
import { UserAccountService } from './user-account.service';

@Controller('user-account')
export class UserAccountController {
  constructor(private userAccountService: UserAccountService) {}

  @Get(':userId')
  async getUserAccount(@Param('userId') userId: string) {
    try {
      await this.userAccountService.getUserAccountDetails(userId);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
