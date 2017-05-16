import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
   isExpanded = false;
    @Input() title: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
  constructor() { }

  ngOnInit() {
  }

}
