"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccountService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
@(0, common_1.Injectable)()
class UserAccountService {
    httpService;
    constructor(httpService) {
        this.httpService = httpService;
    }
    getUserAccountDetails(userId) {
        return this.httpService
            .get(`http://localhost:${PORT}/user/${userId}`)
            .pipe((0, operators_1.map)((response) => response.data));
    }
}
exports.UserAccountService = UserAccountService;
