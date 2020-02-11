import { InputType, Field } from "type-graphql";
import { IsString, IsBoolean } from "class-validator";

@InputType()
export class UpdatePostData{
    @Field()
    @IsString()
    title : string;
}