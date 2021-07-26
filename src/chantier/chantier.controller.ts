import { Controller } from '@nestjs/common';
import { ChantierService } from './chantier.service';
import { Chantier } from './chantier.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Chantier,
  },
  query: {
    join: {
      commandes: {
        eager: true,
      },
    },
  },
})
@ApiTags('chantiers')
@Controller('chantiers')
export class ChantierController {
  constructor(private readonly service: ChantierService) {}
}
