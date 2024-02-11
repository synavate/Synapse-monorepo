// slack-gateway.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SlackController } from './slack.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SLACK_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001, // Adjust port as needed
        },
      },
    ]),
  ],
  controllers: [SlackController],
})
export class SlackGatewayModule {}

