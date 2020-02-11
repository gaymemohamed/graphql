import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [PostService, PostResolver]
  ,
  imports: [
    SharedModule
  ]
})
export class PostModule {}
