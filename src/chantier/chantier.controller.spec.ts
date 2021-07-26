import { Test, TestingModule } from '@nestjs/testing';
import { ChantierController } from './chantier.controller';

describe('ChantierController', () => {
  let controller: ChantierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChantierController],
    }).compile();

    controller = module.get<ChantierController>(ChantierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
