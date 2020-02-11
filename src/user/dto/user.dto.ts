import { InputType, ArgsType, Field, Int } from "type-graphql";
import { IsString } from "class-validator";

@InputType()
export class CreateUserDto{

    @Field({nullable : true})
    @IsString()
    username : string

    @Field()
    @IsString()
    email : string  
}   