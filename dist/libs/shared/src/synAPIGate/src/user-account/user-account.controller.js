"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccountController = void 0;
const common_1 = require("@nestjs/common");
@(0, common_1.Controller)('user-account')
class UserAccountController {
    userAccountService;
    constructor(userAccountService) {
        this.userAccountService = userAccountService;
    }
    @(0, common_1.Get)(':userId')
    async getUserAccount(
    @(0, common_1.Param)('userId')
    userId) {
        try {
            await this.userAccountService.getUserAccountDetails(userId);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
}
exports.UserAccountController = UserAccountController;
