import { Component, OnDestroy, OnInit } from "@angular/core";
import { Post } from "../post.model";

import { PostsService } from '../posts.service'
import { Subscription } from "rxjs";
@Component({
    selector:'app-post-list',
    templateUrl: 'post-list.component.html',
    styleUrls: ['post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
    
    // posts = [
    //     { title: 'fisrt post', description : 'This is the first post description '},
    //     { title: 'Second post', description : 'This is the Second post description '},
    //     { title: 'Third post', description : 'This is the Third post description '},
    //     { title: 'Fourth post', description : 'This is the Fourth post description '},
    //     { title: 'Fifth post', description : 'This is the Fifth post description '},
    // ]

    //@Input() posts: Post[] = []; 

    posts: Post[] = [];
    private postsSub: Subscription;
    //constructor(public postsService: PostsService){}
    constructor(public postsService: PostsService) {
        this.postsSub = new Subscription(); // Initialize postsSub
      }

    ngOnInit(){
        this.postsService.getPosts();
        this.postsService.getpostUpdateListener()
            .subscribe((posts: Post[])=>{
                this.posts = posts;
            });
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }

    onDelete(postId: String){
        
        this.postsService.deletePost(postId);
    }

}