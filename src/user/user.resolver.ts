import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { UpdatePostData } from 'src/post/dto/update-post.dto';

@Resolver(of => User)
export class UserResolver {
    constructor(
        private readonly userService : UserService,
    ){}

    @Mutation(returns => User) 
    async createUser(
        @Args("userInfo") createUserInputData : CreateUserDto 
        ){
        return await this.userService.createUser(createUserInputData); 
    }

    @Query(returns => [User])
    async getAllUsers(){
        return await this.userService.getAllUsers();
    }

    @Query(returns => User)
    async getSingleUser(@Args('userId') userId : string){
        return await this.userService.getSingleUser(userId);
    }

    @Mutation(returns => User)
    async updateSingleUser(
        @Args("UserUpdateData") updateUserInput : UpdateUserDto,
        @Args("PostUpdateData") updatePostInput : UpdatePostData
    ){
        return await this.userService.updateSingleUser( updateUserInput, updatePostInput);
    }

}
