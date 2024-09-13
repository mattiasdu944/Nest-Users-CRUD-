import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

  constructor( private prisma: PrismaService ){}

  async create(createUserDto: CreateUserDto) {

    const user = await this.prisma.user.create({
      data: createUserDto
    })

    return user;  
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
  
    return users; 
  }

  async findOne(id: number) {
    
    const user = await this.prisma.user.findFirst({
      where: {
        id
      }
    }) 
    
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    
    const user = this.prisma.user.update({
      where: { id },
      data: updateUserDto
    })

    return user;

  }

  async remove(id: number) {
    
    await this.prisma.user.delete({ where: { id }})

    return "Usuario eliminado";

  }
}
