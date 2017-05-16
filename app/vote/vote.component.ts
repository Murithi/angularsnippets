import { Component,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent  {
  @Input() votecount=0;
  @Input() myvote=0;
  @Output() votes = new EventEmitter();


  onClickUp(){

    if (this.myvote == 1)
      return;
    this.myvote++;
  }

  onClickDown(){

    if (this.myvote == -1)
      return;
    this.myvote--;

  }


}
