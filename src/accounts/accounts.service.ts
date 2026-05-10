import { Injectable, NotFoundException } from '@nestjs/common';
import { Account } from './account.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Account)
        private accountRepo : Repository<Account>,

        @InjectRepository(User)
        private userRepo:Repository<User>
    ){}

   async createAccount(userId:number , acc:Partial<Account>){
        const user = await this.userRepo.findOne({
            where : {id:userId}
        });

        if(!user){
            throw new NotFoundException('user not found');
        }

        acc.user = user;

        return this.accountRepo.save(acc);

    }

    getAllAccount(){
        return this.accountRepo.find();
    }

   async getAccountByUser(userId:any){
        const user = await this.userRepo.findOne({
            where:{id:userId}
        })

        return this.accountRepo.find({
            where:{
                user:{
                    id:userId
                }
            },
            relations:['user','transaction']
        })
    }


}
