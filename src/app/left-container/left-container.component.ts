import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LeftContainerComponent implements OnInit {

  @Input() addToObject:User ;
  @Input() addToArray = [];
  constructor(private cd:ChangeDetectorRef) { }
  ngOnInit() {
  }

  changeDetection(){
  this.cd.markForCheck()
  }

  update() {
    // this.addToArray.push('value');
    // this.addToObject.name = 'value';
    // this.addToObject = {
    //   name:value
    // }
  }

  ngDoCheck() {
    console.log('ngDoCheck - LeftContainerComponent');
   //this.cd.markForCheck();
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked - LeftContainerComponent');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked - LeftContainerComponent');
  }
}