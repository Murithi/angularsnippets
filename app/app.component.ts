import { TweetService } from './tweet.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Staarabika"
  post = {
    art_title : 'Staarabika',
    isFavorite: true,
    isliked:false,
    likes:0,
    votecount : 10,
    myvote:1,
  }
   tweets: any[];

  onFavoriteChange($event){
    console.log($event)
  }
  onLikeChange($event){

   this.post.isliked =$event['newValue'];
   this.post.likes += this.post.isliked ? 1 : -1

  }
  onVote($event){
    console.log($event)
    this.post.votecount +=$event['newValue']
  }
      constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}
