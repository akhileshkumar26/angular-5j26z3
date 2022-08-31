import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-right-right',
  templateUrl: './right-right.component.html',
  styleUrls: ['./right-right.component.css']
})
export class RightRightComponent implements OnInit {
  @Input() addToObject:User;
  @Input() addToArray = [];
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }
  ngOnInit() {
  }

  ngDoCheck() {
    console.log('ngDoCheck - RightRightComponent')
  }
}