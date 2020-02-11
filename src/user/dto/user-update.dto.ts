import {ArgsType, InputType, Field, Int, ID } from "type-graphql";
import { IsString, IsNumber } from "class-validator";
import { Post } from "src/post/models/post.model";


@InputType()
export class UpdateUserDto{
    @Field()
    @IsString()
    id ?: string

    @Field({nullable : true})
    @IsString()
    username ?: string

    @Field()
    @IsString()
    email ?: string    
}