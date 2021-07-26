import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Commande } from '../chantier/author.entity';

@Entity()
export class Chantier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nom_client: string;

  @Column('number')
  montant_ht: number;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  date_previ_ordo: string;

  
}
