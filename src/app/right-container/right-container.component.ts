import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RightContainerComponent implements OnInit {
  @Input() addToObject:User ;
  @Input() addToArray = [];
  constructor() { }

  ngOnChanges() {
    console.log('ngOnChanges - RightContainerComponent')
  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('ngDoCheck - RightContainerComponent')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked - RightContainerComponent');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked - RightContainerComponent');
  }
}