"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerService = void 0;
const common_1 = require("@nestjs/common");
const amqp_connection_manager_1 = __importDefault(require("amqp-connection-manager"));
//import { EmailService } from 'src/email/email.service';
@(0, common_1.Injectable)()
class ConsumerService {
    emailService;
    channelWrapper;
    logger = new common_1.Logger(ConsumerService.name);
    constructor(emailService) {
        this.emailService = emailService;
        const connection = amqp_connection_manager_1.default.connect(['amqp://localhost']);
        this.channelWrapper = connection.createChannel();
    }
    async onModuleInit() {
        try {
            await this.channelWrapper.addSetup(async (channel) => {
                await channel.assertQueue('emailQueue', { durable: true });
                await channel.consume('emailQueue', async (message) => {
                    if (message) {
                        const content = JSON.parse(message.content.toString());
                        this.logger.log('Received message:', content);
                        await this.emailService.sendEmail(content);
                        channel.ack(message);
                    }
                });
            });
            this.logger.log('Consumer service started and listening for messages.');
        }
        catch (err) {
            this.logger.error('Error starting the consumer:', err);
        }
    }
}
exports.ConsumerService = ConsumerService;
