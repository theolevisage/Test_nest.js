import { Controller } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { Commande } from './commande.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Commande,
  },
  query: {
    join: {
      chantier: {
        eager: true,
      },
    },
  },
})
@ApiTags('commandes')
@Controller('commandes')
export class CommandeController {
  constructor(public service: CommandeService) {}
}
