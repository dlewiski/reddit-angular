import { Component, OnInit } from '@angular/core';
import { UserPost } from '../user-post.model';
import { UserPostService } from '../user-post.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [UserPostService]
})
export class ViewComponent implements OnInit  {
  userPosts: FirebaseListObservable<any[]>;

  constructor(private userPostService: UserPostService) { }

  ngOnInit() {
    this.userPosts = this.userPostService.getUserPosts();
  }

}
