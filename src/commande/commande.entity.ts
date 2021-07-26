import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Chantier } from '../chantier/chantier.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Commande {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  etat: string;

  @Column('text')
  description: string;

  @Column('int')
  quantite: number;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  date_mise_en_fab: Date;

  @ApiProperty({ type: () => Chantier })
  @ManyToOne(() => Chantier, (chantier) => chantier.commandes)
  chantier: Chantier;
}
