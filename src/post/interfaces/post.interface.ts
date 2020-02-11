import { InterfaceType, Field, Int, ID } from "type-graphql";
import { User } from "src/user/models/user.model";

@InterfaceType()
export abstract class PostInterface {
    @Field(type => ID)
    id : string;

    @Field() 
    title : string;

    @Field()
    published : boolean;

    @Field(type => User)
    author : User

    @Field()
    createdAt : Date;
}