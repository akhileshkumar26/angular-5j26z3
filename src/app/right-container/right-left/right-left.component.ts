import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-right-left',
  templateUrl: './right-left.component.html',
  styleUrls: ['./right-left.component.css']
})
export class RightLeftComponent implements OnInit {
  @Input() addToObject:User;
  @Input() addToArray = [];
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }
  ngOnInit() {
  }

  ngDoCheck() {
    console.log('ngDoCheck - RightLeftComponent')
  }
}