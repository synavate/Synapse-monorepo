// app.module.ts
import { Module } from '@nestjs/common';
import { SlackModule } from './slack-module/slack.module';

@Module({
  imports: [SlackModule],
})
export class AppModule {}