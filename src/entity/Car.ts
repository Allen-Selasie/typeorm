import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Car extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 70, unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  brand: string;

  @Column("simple-array") // or { array: true } for PostgreSQL
  images: string[];

  // Many cars can belong to one user (author)
  @ManyToOne(() => User, (user) => user.cars)
  author: User; // Reference to User entity
}
