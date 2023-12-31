import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}


  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save({...createUserDto});
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({where:{
      id: id
    }});
  }

  async findByPhone(phone: string) {
    return await this.userRepository.findOne({where:{
      phone: phone
    }});
  }
}
