import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-left-right',
  templateUrl: './left-right.component.html',
  styleUrls: ['./left-right.component.css'],
})
export class LeftRightComponent implements OnInit {
  @Input() addToObject: User;
  @Input() addToArray = [];

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
  }
  ngOnInit() {}

  ngDoCheck() {
    console.log('ngDoCheck - LeftRightComponent');
  }
}
