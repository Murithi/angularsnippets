import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isLiked=false;
  @Input() totalLikes=0;

  onClick(){
    this.isLiked = !this.isLiked;
    this.totalLikes += this.isLiked ? 1 : -1;
  }
  constructor() { }

  ngOnInit() {
  }

}
