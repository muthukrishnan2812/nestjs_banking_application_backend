import { IsNotEmpty, isNotEmpty } from "class-validator";

export class transactionDTO{
    @IsNotEmpty()
    id?:number;
    @IsNotEmpty()
    type?:String;
    @IsNotEmpty()
    amount?:number;
}