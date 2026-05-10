import { Transaction } from "src/transaction/transaction.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account{
    @PrimaryGeneratedColumn()
    id?:number;

    @Column()
    accountNo?:String;

    @Column()
    balance?:number;

    @ManyToOne(()=>User, (user)=>user.accounts)
    user?:User;

    @OneToMany(()=> Transaction, (transaction)=>transaction.account)
    transaction ?: Transaction[];


}