import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostsService{
    private posts: Post[] = [];

    getPosts(){
        console.log("this posts : " ,this.posts);
        //return [...this.posts];
        return this.posts;
    }

    addPost(title: string, description: string){
        const post : Post = {title:title, description:description};
        this.posts.push(post); 
    }

    // addPost(post: Post){
    //     this.posts.push(post); 
    // }
}
