import { Test, TestingModule } from '@nestjs/testing';
import { MotivoController } from './motivo.controller';

describe('MotivoController', () => {
  let controller: MotivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotivoController],
    }).compile();

    controller = module.get<MotivoController>(MotivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
