import { Module } from '@nestjs/common';
import { SlackController } from '../slack-controller/slack.controller';
import { SlackService } from '../slack-service/slack.service';

@SlackModule({
  controllers: [SlackController],
  providers: [SlackService],
  exports: [SlackService],
})
export class SlackModule {}