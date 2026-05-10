import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepo:Repository<User>
    ){}

    createUser(user:Partial<User>){
        const create =  this.userRepo.create(user);
        return this.userRepo.save(create);
    }

   async loginUser(email:String, password:String){
        const user =  await this.userRepo.findOne({
            where:{email}
        });

        if (user && user.password === password) {
            return user;
        }
    }

    

    getUser(id:number){
        return this.userRepo.findOneBy({id});
    }

    deleteUser(id:number){
        return this.userRepo.delete({id});
    }
}
