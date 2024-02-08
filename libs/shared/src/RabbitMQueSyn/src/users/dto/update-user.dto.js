"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
const class_validator_1 = require("class-validator");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
    @(0, class_validator_1.IsNotEmpty)()
    @(0, class_validator_1.IsString)()
    username;
    @(0, class_validator_1.IsNotEmpty)()
    @(0, class_validator_1.IsString)()
    @(0, class_validator_1.IsEmail)()
    email;
}
exports.UpdateUserDto = UpdateUserDto;
