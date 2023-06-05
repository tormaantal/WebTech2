import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm"

@Entity()
export class Worker {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    competence: string;

    @Column()
    wage: number;

    @Column()
    status: string;
    
}
