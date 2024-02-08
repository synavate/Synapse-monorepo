"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProducerService = void 0;
const common_1 = require("@nestjs/common");
const amqp_connection_manager_1 = __importDefault(require("amqp-connection-manager"));
@(0, common_1.Injectable)()
class ProducerService {
    channelWrapper;
    constructor() {
        const connection = amqp_connection_manager_1.default.connect(['amqp://localhost']);
        this.channelWrapper = connection.createChannel({
            setup: (channel) => {
                return channel.assertQueue('emailQueue', { durable: true });
            },
        });
    }
    async addToEmailQueue(mail) {
        try {
            await this.channelWrapper.sendToQueue('emailQueue', Buffer.from(JSON.stringify(mail)), {
                persistent: true,
            });
            common_1.Logger.log('Sent To Queue');
        }
        catch (error) {
            throw new common_1.HttpException('Error adding mail to queue', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
exports.ProducerService = ProducerService;
