import { Component } from '@angular/core';

// import {Post} from './posts/post.model';
// interface Post {
//   title: string;
//   description: string;
// }


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='';
 
  // storedPosts: Post[] = [];

  // onPostAdded(post: Post) {
  //   this.storedPosts.push(post);
  // }

  sidebarOpened = true;

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }
}
