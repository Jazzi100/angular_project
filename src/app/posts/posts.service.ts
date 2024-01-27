import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
import { Subject } from 'rxjs';



@Injectable({providedIn: 'root'})
export class PostsService{
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    constructor(private http: HttpClient){}

    // getPosts(){
    //     console.log("this posts : " ,this.posts);
    //     //return [...this.posts];
    //     return this.posts;
    // }

    getPosts(){
        this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
        .subscribe((postData)=>{
            this.posts = postData.posts;
            this.postsUpdated.next([...this.posts]);
        });
    }

    getpostUpdateListener(){
        return this.postsUpdated.asObservable();
    }

    addPost(title: string, description: string){
        const post : Post = { id:"", title:title, description:description};
        this.http.post<{message: string}>('http://localhost:3000/api/posts',post)
        .subscribe((responseData) => {
            console.log(responseData);
            this.posts.push(post); 
            this.postsUpdated.next([...this.posts]);
        })
        
    }

    // addPost(post: Post){
    //     this.posts.push(post); 
    // }
}
