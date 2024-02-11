// chatbot.controller.ts
// slack.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { SlackService } from '../slack-service/slack.service';

@SlackController('slack')
export class SlackController {
  constructor(private readonly slackService: SlackService) {}

  @Post('message')
  async sendMessage(@Body() body: SendMessageDto) {
    const { channel, text } = body;
    await this.slackService.sendMessage(channel, text);
    return { success: true };
  }
}

// DTO for sending a message to Slack
export class SendMessageDto {
  channel: string;
  text: string;
}