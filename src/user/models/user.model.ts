import { ObjectType } from "type-graphql";
import { UserInterface } from "../interfaces/user.interface";
import { Post } from "src/post/models/post.model";

@ObjectType({ implements: UserInterface })
export class User implements UserInterface {
    id: string;
    createdAt : Date;
    username: string;  
    email: string;
    posts: Post[];
} 