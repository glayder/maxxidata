import { Profession } from 'src/profession/entities/profession.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, type: 'varchar', length: 200 })
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: true, type: 'varchar', length: 200 })
  telefone: string;

  @Column({ nullable: true, type: 'varchar', length: 200 })
  tipoDeProfissional_id: string;

  @ManyToOne(() => Profession)
  @JoinTable({ name: 'tipoDeProfissional_id' })
  tipoDeProfissional: Profession;

  @Column()
  situacao: boolean;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
