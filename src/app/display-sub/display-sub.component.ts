import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserPost } from '../user-post.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserPostService } from '../user-post.service';

@Component({
  selector: 'app-display-sub',
  templateUrl: './display-sub.component.html',
  styleUrls: ['./display-sub.component.css'],
  providers: [UserPostService]
})
export class DisplaySubComponent implements OnInit {
  allPosts: FirebaseListObservable<any[]>;
  subreddit: string = null;
  subredditPosts = [];

  constructor(private route: ActivatedRoute, private location: Location, private userPostService: UserPostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.subreddit = urlParameters['subreddit'];
    });
    this.allPosts = this.userPostService.getUserPosts();
    this.subredditPosts = this.displaySubredditPosts();
  }

  displaySubredditPosts(){
    let self = this;
    let subredditPosts = [];
    this.allPosts.forEach(function(posts) {
      posts.forEach(function(subPost) {
        if(subPost.subreddit === self.subreddit) {
          subredditPosts.push(subPost);
        }
      })
    })
    return subredditPosts;
  }
}
