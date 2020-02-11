import { ObjectType } from "type-graphql";
import { PostInterface } from "../interfaces/post.interface";
import { User } from "src/user/models/user.model";

@ObjectType({implements: PostInterface})
export class Post implements PostInterface {
    createdAt: Date;
    author: User;
    id: string;    
    title: string;
    published: boolean; 
}