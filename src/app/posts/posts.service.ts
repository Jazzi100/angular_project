import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
import { Subject } from 'rxjs';
import { response } from "express";

@Injectable({providedIn: 'root'})
export class PostsService{
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    constructor(private http: HttpClient){}

    getPosts(){
        this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
        .subscribe((postData)=>{
            this.posts = postData.posts;
            this.postsUpdated.next([...this.posts]);
        });
    }

    getSinglePost(id:String){
        return {...this.posts.find(p => p._id === id)};
    }

    getpostUpdateListener(){
        return this.postsUpdated.asObservable();
    }

    

    addPost(title: string, description: string){
        const post : Post = { _id:"", title:title, description:description};
        this.http.post<{message: string}>('http://localhost:3000/api/posts',post)
        .subscribe((responseData) => {
            console.log(responseData);
            this.posts.push(post); 
            this.postsUpdated.next([...this.posts]);
        })
        
    }   

    deletePost(postId: String){
        this.http.delete('http://localhost:3000/api/posts/' + postId)
        .subscribe(() => {
            const updatedPosts = this.posts.filter(post => post._id !== postId);
            this.posts = updatedPosts;
            this.postsUpdated.next([...this.posts]);
        });
    }

    updatePost(id:string, title:string, description:string){
        const post: Post = { _id:id, title:title, description:description};
        console.log("IDDDDD : " + id);
        this.http.put('http://localhost:3000/api/posts/'+id, post)
        .subscribe(response => console.log(response));
    }
}
