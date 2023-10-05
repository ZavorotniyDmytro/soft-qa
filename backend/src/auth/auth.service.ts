import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}

    async register(registerUserDto: RegisterUserDto){
        const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);
        await this.userService.create({...registerUserDto, password: hashedPassword})
        return this.userService.findAll();
        // прилетает запрос
        // шифрование пароля
        // запись все данных в базу
        // если ок, вернуть 200 ОК, если нет, ошибку
    }

    login(loginUserDto: LoginUserDto){
        // прилетает запрос
        // дешифрование пароля с базы
        // если ок, вернуть 200 ОК, если нет, ошибку
    }
}
