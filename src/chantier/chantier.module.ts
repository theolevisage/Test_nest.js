import { Module } from '@nestjs/common';
import { ChantierService } from './chantier.service';
import { ChantierController } from './chantier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chantier } from './chantier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chantier])],
  providers: [ChantierService],
  controllers: [ChantierController],
})
export class ChantierModule {}
