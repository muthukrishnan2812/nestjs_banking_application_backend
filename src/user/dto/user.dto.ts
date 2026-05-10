import {IsNotEmpty} from 'class-validator';
export class UserDto{
    
    @IsNotEmpty()
    name?:String;
    @IsNotEmpty()
    email?:String;
    @IsNotEmpty()
    password?:String;
}