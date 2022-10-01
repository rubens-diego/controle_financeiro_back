import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Person } from "../../people/entities/person.entity";

@Entity("users")
export default class Users {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column({
    type: "varchar",
    name: "user_name",
    nullable: true,
    length: 250,
  })
  userName: string | null;

  @Column({
    type: "varchar",
    name: "password",
    nullable: true,
    length: 250,
  })
  password: string | null;

  @Column({
    type: 'varchar',
    name: 'email',
    length: 150,
  })
  email: string;

  @Column({
    type: "boolean",
    name: "active",
    default: () => "true",
  })
  active: boolean;

  @Column({
    type: "boolean",
    name: "blocked",
    default: () => "true",
  })
  blocked: boolean;

  @Column({
    type: "varchar",
    name: "refresh_token",
    nullable: true,
    length: 500,
  })
  refreshToken: string | null;



  
  @Column({
    type: "date",
    name: "data_valid_refresh_token",
    nullable: true,
  })
  dataValidRefreshToken: Date | null;

  @Column({
    type: "boolean",
    name: "user_admin",
    default: () => "false",
  })
  userAdmin: boolean;

  @Column({
    type: "date",
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;



  @ManyToOne(() => Person, (people) => people.users)
  @JoinColumn([{ name: "people_id_fk", referencedColumnName: "id" }])
  people: Person;


}
