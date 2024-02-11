// slack.service.ts
// slack.service.ts
import { Injectable } from '@nestjs/common';
import { App, message } from '@slack/bolt';
import { WebClient } from '@slack/web-api';
import { SlackEvents } from './slack-events-service';

@Injectable()
export class SlackService {
  private readonly app: App;
  private readonly client: WebClient;

  constructor() {
    this.app = new App({
      token: process.env.SLACK_BOT_TOKEN,
      signingSecret: process.env.SLACK_SIGNING_SECRET,
    });
    this.client = new WebClient(process.env.SLACK_BOT_TOKEN);
    this.setupEventListeners();
  }

  private async setupEventListeners() {
    const events = new SlackEvents();
  }

  async sendMessage(channel: string, text: string) {
    try {
      await this.client.chat.postMessage({ channel, text });
    } catch (error) {
      console.error('Error sending message:', error);
      throw new Error('Failed to send message to Slack');
    }
  }
}