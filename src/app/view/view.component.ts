import { Component } from '@angular/core';
import { UserPost } from '../user-post.model';
import { USERPOSTS } from '../mock-user-posts';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  {
  userPosts = USERPOSTS;

  constructor() { }

  ngOnInit() {
  }

}
