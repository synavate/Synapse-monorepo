import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
/* Goal is to replace this database in particular with Verida */

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100, unique: true })
    username: string;

    @Column({ length: 100, unique: true })
    email: string;
}
