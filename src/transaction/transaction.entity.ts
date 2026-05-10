import { Account } from "src/accounts/account.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction{
    @PrimaryGeneratedColumn()
    id?:number;
    @Column()
    type?:String;
    @Column()
    amount?:number;

    @ManyToOne(()=>Account,(account)=>account.transaction)
    account ?:Account;


}