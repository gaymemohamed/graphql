import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient, User, Post } from '@prisma/client'
import { CreateUserDto } from './dto/user.dto';
import { PrismaClientService } from 'src/shared/prisma.client.service';
import { UpdateUserDto } from './dto/user-update.dto';
import { UpdatePostData } from 'src/post/dto/update-post.dto';


@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaClientService
    ) {
    }

    async createUser(inputData: CreateUserDto): Promise<User> {
        return await this.prisma.user.create({
            data: {
                username: inputData.username,
                email: inputData.email,
            }
        });
    }
 
    async getAllUsers(): Promise<User[]> {
        return await this.prisma.user.findMany({
            include: {
                posts: true
            }
            
        });
        
    }

    async getSingleUser(id: string): Promise<User> {
        const found = await this.prisma.user.findOne({
            where: { id },
            include: { posts: true }
        })
        if(!found){
            throw new  NotFoundException("this user not exist");
        }
        return found; 
    }

    async updateSingleUser({email ,id , username}:UpdateUserDto,
    {title}
    :UpdatePostData
    )
    : Promise<User> {
        return await this.prisma.user.update({
            where: { id },
            data: {
                username,
                email,
                posts:{                    
                     update:{
                         where:{
                             id
                         },
                         data:{
                             title
                         }
                     }
                }
            },
            
        })
    }
}

