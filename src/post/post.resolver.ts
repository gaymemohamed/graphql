import { Resolver, Mutation ,Query, Args } from '@nestjs/graphql';
import { Post } from './models/post.model';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.dto';

@Resolver(of=> Post)
export class PostResolver {
   constructor(
       private readonly postService : PostService,
   ){}
    
    @Mutation(returns => Post) 
    async createPost(@Args('postInfo') PostInputData : CreatePostDto){
        return await this.postService.createPost(PostInputData);
    }

    @Query(returns=> [Post])
    async getAllPosts(){
        return await this.postService.getAllPosts();
    }

}
