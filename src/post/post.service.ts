import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/post.dto';
import { Post } from '@prisma/client'
import { PrismaClientService } from 'src/shared/prisma.client.service';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class PostService {
    constructor(
        private readonly prisma: PrismaClientService
    ) { }

    async createPost(postData: CreatePostDto): Promise<Post> {
        return await this.prisma.post.create({
            data: {
                title: postData.title,
                published: postData.published,
                user: {
                    connect: {
                        id: postData.userId,
                    }
                }
            }
        })
    }

    async getAllPosts(): Promise<Post[]>{
        return await this.prisma.post.findMany({
          include:{
              user : true
          }
        })

    }
}

