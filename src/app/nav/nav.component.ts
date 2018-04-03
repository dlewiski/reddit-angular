import { Component, OnInit } from '@angular/core';
import { UserPost } from '../user-post.model';
import { UserPostService } from '../user-post.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [UserPostService]
})
export class NavComponent implements OnInit {
  userPosts: FirebaseListObservable<any[]>;
  subreddits = null;

  constructor(private userPostService: UserPostService, private router: Router) { }

  ngOnInit() {
    this.userPosts = this.userPostService.getUserPosts();
    this.subreddits = this.listSubreddits();
  }

  listSubreddits(){
    let uniqueSubreddits = [];
    this.userPosts.forEach(function(redditPost){
      redditPost.forEach(function(post) {
        if(!uniqueSubreddits.includes(post.subreddit)) {
          uniqueSubreddits.push(post.subreddit);

        }
      })
    })
    return uniqueSubreddits;
  };

  goToPosts(clickedSubreddit: string) {
  this.router.navigate(['r', clickedSubreddit]);
};

}
