import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Commande } from './commande.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class CommandeService extends TypeOrmCrudService<Commande> {
  constructor(@InjectRepository(Commande) commande) {
    super(commande);
  }
}
