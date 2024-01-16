import { Component, OnInit } from "@angular/core";
import { Post } from "../post.model";

import { PostsService } from '../posts.service'
@Component({
    selector:'app-post-list',
    templateUrl: 'post-list.component.html',
    styleUrls: ['post-list.component.css']
})
export class PostListComponent implements OnInit {
    
    // posts = [
    //     { title: 'fisrt post', description : 'This is the first post description '},
    //     { title: 'Second post', description : 'This is the Second post description '},
    //     { title: 'Third post', description : 'This is the Third post description '},
    //     { title: 'Fourth post', description : 'This is the Fourth post description '},
    //     { title: 'Fifth post', description : 'This is the Fifth post description '},
    // ]

    //@Input() posts: Post[] = []; 

    posts: Post[] = []; 

    constructor(public postsService: PostsService){}

    ngOnInit(){
        this.posts = this.postsService.getPosts();
    }

}