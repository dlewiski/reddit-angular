import { Injectable } from '@angular/core';
import { UserPost } from './user-post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserPostService {
  userPosts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.userPosts = database.list('userPosts');
  }

  getUserPosts() {
    return this.userPosts;
  }
}
