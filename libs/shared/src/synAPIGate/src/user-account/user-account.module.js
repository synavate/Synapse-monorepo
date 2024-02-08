"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccountModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const user_account_service_1 = require("./user-account.service");
const user_account_controller_1 = require("./user-account.controller");
@(0, common_1.Module)({
    imports: [axios_1.HttpModule],
    providers: [user_account_service_1.UserAccountService],
    controllers: [user_account_controller_1.UserAccountController],
})
class UserAccountModule {
}
exports.UserAccountModule = UserAccountModule;
