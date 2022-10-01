import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Users from '../../users/entities/users.entity';

@Entity('people')
export class Person {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column({
    type: 'varchar',
    name: 'name_people',
    length: 250,
  })
  namePeople: string;

  @Column({
    type: 'varchar',
    name: 'surname_people',
    length: 250,
  })
  surnamePeople: string;

  @Column({
    type: 'varchar',
    name: 'cpf',
    nullable: true,
    length: 15,
  })
  cpf: string | null;

  @Column({
    type: 'date',
    name: 'birthday_date',
  })
  birthdayDate: Date;
  
  @Column({
    type: 'varchar',
    name: 'dd',
    nullable: true,
    length: 3,
  })
  dd: string | null;

  @Column({
    type: 'varchar',
    name: 'telephone',
    nullable: true,
    length: 10,
  })
  telephone: string | null;
 
  @Column({
    type: 'date',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;






  @OneToMany(() => Users, users => users.people)
  users: Users[];
}
