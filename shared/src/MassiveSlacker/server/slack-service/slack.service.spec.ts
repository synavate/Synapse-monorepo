import { Test, TestingModule } from '@nestjs/testing';
import { SlackServiceService } from './slack.service';

describe('SlackServiceService', () => {
  let service: SlackServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlackServiceService],
    }).compile();

    service = module.get<SlackServiceService>(SlackServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
