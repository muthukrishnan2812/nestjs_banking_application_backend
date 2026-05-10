import { Account } from "src/accounts/account.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export  class User{
    @PrimaryGeneratedColumn()
    id?:number;

    @Column()
    name?:String;

    @Column({unique:true})
    email?:String;

    @Column()
    password?:String;

    @OneToMany(()=> Account, (account)=>account.user)
    accounts ?: Account[];

}