import { IsNotEmpty } from "class-validator";

export class accountDTO{
    @IsNotEmpty()
    id?:number;
    @IsNotEmpty()
    accountNo?:String;
    @IsNotEmpty()
    amount?:number;
}