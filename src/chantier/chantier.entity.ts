import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Commande } from '../commande/commande.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Chantier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nom_client: string;

  @Column('int')
  montant_ht: number;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  date_previ_ordo: Date;

  @ApiProperty({ type: () => Commande })
  @OneToMany(() => Commande, (commande) => commande.chantier)
  commandes: Commande[];
}
