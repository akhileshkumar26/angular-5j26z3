import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  addToObject: User = {
    name: 'default',
  };
  addToArray = [];
  inputEvent(value) {
    this.addToArray.push(value);
    this.addToObject.name = value;
    // this.addToObject = {
    //   name:value
    // }
  }
  ngDoCheck() {
    console.log('ngDoCheck - AppComponent');
  }
}
