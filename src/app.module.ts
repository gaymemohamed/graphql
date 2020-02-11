import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import {GraphQLModule} from '@nestjs/graphql'
import { PostModule } from './post/post.module';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile : 'schema.gql' 
    }),
    PostModule
  ],
})
export class AppModule {}
