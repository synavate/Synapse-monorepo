"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
@(0, common_1.Injectable)()
class UsersService {
    userRepository;
    producerService;
    constructor(
    @(0, typeorm_1.InjectRepository)(user_entity_1.User)
    userRepository, producerService) {
        this.userRepository = userRepository;
        this.producerService = producerService;
    }
    async create(createUserDto) {
        const newUser = this.userRepository.create(createUserDto);
        const user = await this.userRepository.save(newUser);
        /*const emailData = {
          email: user.email,
          subject: 'Welcome to Our Community',
          html: `<p>Hello ${user.username},</p>
            <p>Welcome to our community! Your account is now active.</p>
            <p>Enjoy your time with us!</p>`,
        };
        await this.producerService.addToEmailQueue(emailData);*/
        return user;
    }
    findAll() {
        return `This action returns all users`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
}
exports.UsersService = UsersService;
