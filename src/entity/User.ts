import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserTest2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
