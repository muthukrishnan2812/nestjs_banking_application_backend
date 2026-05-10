import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/accounts/account.entity';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {
    constructor(
        @InjectRepository(Transaction)
        private transactionRepo:Repository<Transaction>,

        @InjectRepository(Account)
        private accountRepo:Repository<Account>
    ){}

   async createTransaction(accountId: number, data: Partial<Transaction>) {

    const account = await this.accountRepo.findOne({
        where: { id: accountId }
    });

    if (!account) {
        throw new NotFoundException('account not found');
    }

    // CHECK WITHDRAWAL
    if (data.type === 'Withdraw') {

        if (account.balance! < (data.amount || 0)) {
            throw new NotFoundException('Insufficient balance');
        }

        // reduce balance
        account.balance = Number(account.balance || 0) - Number(data.amount || 0);
    }

    // DEPOSIT
    else if (data.type === 'Deposit') {

        // increase balance
        account.balance = Number(account.balance || 0) + Number(data.amount || 0);
    }

    // save updated account balance
    await this.accountRepo.save(account);

    // attach account to transaction
    data.account = account;

    // save transaction
    return this.transactionRepo.save(data);
}

    getAllTransaction(){
        return this.transactionRepo.find();
    }

    async getAllTransactionByAccount(accId:number){
        const account = await this.accountRepo.findOne({
            where:{id:accId}
        })

        if(!account){
            throw new NotFoundException('account not found');
        }

        return this.transactionRepo.find({
        where: {
            account: {
                id: accId
            }
        },
        relations: ['account']
    });
    }
}
