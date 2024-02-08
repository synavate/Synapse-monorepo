"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
class CreateUserDto {
    @(0, class_validator_1.IsNotEmpty)()
    @(0, class_validator_1.IsString)()
    username;
    @(0, class_validator_1.IsNotEmpty)()
    @(0, class_validator_1.IsString)()
    @(0, class_validator_1.IsEmail)()
    email;
}
exports.CreateUserDto = CreateUserDto;
