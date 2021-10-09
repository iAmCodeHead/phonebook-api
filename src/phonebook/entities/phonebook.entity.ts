import { BaseModel } from "BaseModel";
import { Column, Entity } from "typeorm";

@Entity()
export class Phonebook extends BaseModel {

    @Column()
    name: string;

    @Column()
    phone_number: string;
    
    @Column({ nullable: true })
    email: string;

    @Column()
    address: string;

}
