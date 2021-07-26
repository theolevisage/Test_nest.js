import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chantier } from './chantier.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class ChantierService extends TypeOrmCrudService<Chantier> {
  constructor(@InjectRepository(Chantier) chantier) {
    super(chantier);
  }
}
