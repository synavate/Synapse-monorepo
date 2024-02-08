"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
/* Goal is to replace this database in particular with Verida */
@(0, typeorm_1.Entity)('users')
class User {
    @(0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    id;
    @(0, typeorm_1.Column)({ length: 100, unique: true })
    username;
    @(0, typeorm_1.Column)({ length: 100, unique: true })
    email;
}
exports.User = User;
