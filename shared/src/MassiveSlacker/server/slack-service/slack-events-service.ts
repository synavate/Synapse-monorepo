import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { Response } from 'express';

dotenv.config({path: '../slack.env'});

@Injectable()
export class SlackEvents {
  constructor() {}

  async handleSlackEvent(request): Promise<Response> {
    try {
      // Define the Slack webhook URL
      const slackWebhookUrl: string = process.env.SLACK_WEBHOOK_CI;

      // Define the Slack message payload
      const slackMessage = {
        text: ':warning: Danger! Cloudflare Worker Alert! :warning:',
        attachments: [
          {
            color: 'danger',
            text: 'This is an important message from a Cloudflare Worker. Action may be required!'
          }
        ]
      };

      // Send a POST request to the Slack webhook URL with the message payload
      const response = await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(slackMessage),
      });

      // Check if the request was successful
      if (!response.ok) {
        return new Response('Failed to send message to Slack!', { status: 500 });
      }

      return new Response('Message sent to Slack successfully!', { status: 200 });
    } catch (error) {
      console.error('Error sending message to Slack:', error);
      return new Response('Failed to send message to Slack!', { status: 500 });
    }
  }
}
