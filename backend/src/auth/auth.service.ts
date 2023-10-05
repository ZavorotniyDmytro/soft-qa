import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}

    async register(registerUserDto: RegisterUserDto){
        if (await this.userService.findByPhone(registerUserDto.phone))
            throw new HttpException('User with this phone already exists', HttpStatus.BAD_REQUEST);

        const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);
        try {
            await this.userService.create({...registerUserDto, password: hashedPassword})

            registerUserDto.password = undefined

            return registerUserDto
        } catch (error) {
            throw new HttpException('Something went wrong: ' + error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async login(loginUserDto: LoginUserDto){
        try {
			const user = await this.userService.findByPhone(loginUserDto.phone);
			const isPasswordMatching = await bcrypt.compare(loginUserDto.password, user.password)
			if (!isPasswordMatching) {
				throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST)
			}
			user.password = undefined;
			return user
		} catch (error) {
			throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
		}
    }
}
