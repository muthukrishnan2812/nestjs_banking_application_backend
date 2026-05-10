import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';
import { TransactionService } from './transaction.service';
import { transactionDTO } from './dto/transaction.dto';
import { Transaction } from './transaction.entity';

@Controller('transaction')
export class TransactionController {

    constructor( private transactionService:TransactionService ){}

    @Post(':id')
    createTransaction(@Param('id') accId:number ,@Body() body:Transaction){
        return this.transactionService.createTransaction(accId,body);
    }

    @Get()
    getAllTransaction(){
        return this.transactionService.getAllTransaction();
    }

    @Get(':id')
    getAllTransactionByAccount(@Param('id') accId:number){
        return this.transactionService.getAllTransactionByAccount(accId);
    }

}
