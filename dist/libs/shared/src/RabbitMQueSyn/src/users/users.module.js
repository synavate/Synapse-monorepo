"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const queue_module_1 = require("src/queues/queue.module");
@(0, common_1.Module)({
    imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]), queue_module_1.QueueModule],
    controllers: [users_controller_1.UsersController],
    providers: [users_service_1.UsersService],
})
class UsersModule {
}
exports.UsersModule = UsersModule;
