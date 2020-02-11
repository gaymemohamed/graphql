import { ArgsType, InputType, Field, Int, ID } from "type-graphql";
import { IsString, IsBoolean, IsNumber } from "class-validator";



@InputType()
export class CreatePostDto{
    @Field()
    @IsString()
    title ?: string;

    @Field()
    @IsBoolean()
    published ?: boolean;

    @Field(type=>ID)
    @IsString()
    userId : string;
     
}