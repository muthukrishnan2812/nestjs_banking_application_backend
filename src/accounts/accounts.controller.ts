import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { UserService } from 'src/user/user.service';
import { Account } from './account.entity';

@Controller('accounts')
export class AccountsController {
    constructor(private accService:AccountsService){}

    @Post(':userId')
    createAccount(@Param('userId')userId:number, @Body() body:Account){
        return this.accService.createAccount(userId,body);
    }

    @Get()
    getAllAccount(){
        return this.accService.getAllAccount();
    }

    @Get(':id')
    getAccountByUser(@Param('id') id:number){
        return this.accService.getAccountByUser(id);
    }
}
