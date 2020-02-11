import {Field, InterfaceType, Int, ID} from 'type-graphql'
import { Post } from 'src/post/models/post.model';

@InterfaceType()
export abstract class UserInterface {
    @Field(type => ID)
    id : string;
    
    @Field()
    username : string;

    @Field()
    email: string;

    @Field(type => [Post])
    posts: Post[];

    @Field()
    createdAt : Date;
}