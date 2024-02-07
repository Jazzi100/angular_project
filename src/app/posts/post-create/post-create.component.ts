import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Post } from "../post.model";
import { NgForm } from "@angular/forms";
import { PostsService } from '../posts.service';
import { ActivatedRoute, ParamMap  } from "@angular/router";
@Component({
    selector: 'app-post-create',
    templateUrl: 'post-create.component.html',
    styleUrls: ['post-create.component.css']
})

export class PostCreateComponent implements OnInit{
    
    description: string = '';
    title: string = '';
    private mode = 'create';
    private postId!: string;
    post : Post | null = null;
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

    constructor(public postsService: PostsService, public route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            if(paramMap.has('postId')){
                this.mode = 'edit';
                this.postId = paramMap.get('postId') ?? '';
                this.post = this.postsService.getSinglePost(this.postId) as any;
            }else{
                this.mode = 'create';
                this.postId = null as any;
            }
        });
    }

    addSavePost(form: NgForm){
        if(form.invalid){
            return;
        }
        if(this.mode === 'create'){
            this.postsService.addPost(form.value.title,form.value.description);
        }else{
            this.postsService.updatePost(this.postId,form.value.title,form.value.description);
        }
        // const post: Post = {
        //     _id: "",
        //     title: form.value.title,
        //     description: form.value.description
        // }
        //this.postCreated.emit(post);

        
        form.resetForm();

        //this.postsService.addPost(post);
    }


        
}