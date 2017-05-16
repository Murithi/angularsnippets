import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'stars',
  templateUrl: './starbinding.component.html',
  styleUrls: ['./starbinding.component.css']
})
export class StarbindingComponent implements OnInit {
  @Input('is_favorite') isEmpty=true;

  @Output() change = new EventEmitter();

  onClick(){

    this.isEmpty= !this.isEmpty
    this.change.emit({newValue: this.isEmpty})
  }


  constructor() { }

  ngOnInit() {
  }

}
