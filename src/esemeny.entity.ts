import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Esemeny {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  resztvevok: number;

  @Column()
  megnevezes: string;
}
