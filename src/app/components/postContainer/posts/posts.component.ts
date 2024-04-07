import {Component, Input, OnInit} from '@angular/core';
import {PostService, UserService} from "../../../services";
import {IPost} from "../../../interfaces";
import {PostComponent} from "../post/post.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{

  posts: IPost[]

  @Input()
  userId:number


  constructor(private userService:UserService) {
  }

  ngOnInit() {
    this.userService.getUserPosts(this.userId).subscribe(value => this.posts = value)
  }
}
