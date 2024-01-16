import { Component, EventEmitter, Output } from "@angular/core";
import { Post } from "../post.model";
import { NgForm } from "@angular/forms";
import { PostsService } from '../posts.service';
@Component({
    selector: 'app-post-create',
    templateUrl: 'post-create.component.html',
    styleUrls: ['post-create.component.css']
})

export class PostCreateComponent {
    
    description: string = '';
    title: string = '';
    // @Output() postCreated = new EventEmitter<Post>();
    // addNewPost(postInput: HTMLTextAreaElement){
    //     console.dir(postInput.value);
    //     this.newPost = postInput.value;
    //     //alert("Add New Post function");
    // }

    // addNewPost(){
    //         console.log("Title : ",this.title);
    //         console.log("Description : ",this.description);
    //         const post: Post = {
    //             title: this.title,
    //             description: this.description
    //         }
    //         this.postCreated.emit(post);
    //     }

    constructor(public postsService: PostsService){}

    addNewPost(form: NgForm){
        if(form.invalid){
            return;
        }
        console.log("Title : ",this.title);
        console.log("Description : ",this.description);
        const post: Post = {
            title: form.value.title,
            description: form.value.description
        }
        //this.postCreated.emit(post);

        this.postsService.addPost(form.value.title,form.value.description);

        //this.postsService.addPost(post);
    }
        
}