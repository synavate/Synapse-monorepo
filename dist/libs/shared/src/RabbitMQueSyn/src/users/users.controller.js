"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
@(0, common_1.Controller)('users')
class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    @(0, common_1.Post)()
    create(
    @(0, common_1.Body)()
    createUserDto) {
        return this.usersService.create(createUserDto);
    }
}
exports.UsersController = UsersController;
/*
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
*/ 
