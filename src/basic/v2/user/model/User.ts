import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn
  id: number

  @Column()
  name: string

  @Column()
  document: string

  @Column()
  email: string
}
