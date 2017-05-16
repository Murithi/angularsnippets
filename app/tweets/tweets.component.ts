
import { TweetService } from './../tweet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

    tweets: any[];

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }

  ngOnInit() {
  }

}
