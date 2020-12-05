import { Test, TestingModule } from '@nestjs/testing';
import { MotivoService } from './motivo.service';

describe('MotivoService', () => {
  let service: MotivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MotivoService],
    }).compile();

    service = module.get<MotivoService>(MotivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
