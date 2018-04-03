import { Component, OnInit } from '@angular/core';
import { UserPost } from '../user-post.model';
import { USERPOSTS } from '../mock-user-posts';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userPosts = USERPOSTS;
  subreddits = null;

  listSubreddits(userPosts: UserPost[]){
    let uniqueSubreddits = [];
    this.userPosts.forEach(function(redditPost){
      if(!uniqueSubreddits.includes(redditPost.subreddit)) {
        uniqueSubreddits.push(redditPost.subreddit);
        console.log(redditPost.subreddit);
      }
    })
    return uniqueSubreddits;
  };
  constructor() { }

  ngOnInit() {
    this.subreddits = this.listSubreddits(this.userPosts);
  }

}
