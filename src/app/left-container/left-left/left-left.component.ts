import { Component, Input, OnInit,OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-left-left',
  templateUrl: './left-left.component.html',
  styleUrls: ['./left-left.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LeftLeftComponent implements OnInit {
  @Input() addToObject:User;
  @Input() addToArray = [];
  constructor(private cd:ChangeDetectorRef) { }
  ngOnInit() {
  }

  ngDoCheck() {
    console.log('ngDoCheck - LeftLeftComponent')
  }
}