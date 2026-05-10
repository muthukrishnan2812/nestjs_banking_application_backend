import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    createUser(@Body() user:UserDto){
        return this.userService.createUser(user);
    }

    @Post('/login')
    loginUser(@Body() body){
       return this.userService.loginUser(body.email,body.password);
    }

    @Get(':id')
    getUserId(@Param('id') id: number) {
        return this.userService.getUser(Number(id));
    }

}
