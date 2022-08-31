import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { LeftLeftComponent } from './left-container/left-left/left-left.component';
import { LeftRightComponent } from './left-container/left-right/left-right.component';
import { RightLeftComponent } from './right-container/right-left/right-left.component';
import { RightRightComponent } from './right-container/right-right/right-right.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,LeftContainerComponent, RightContainerComponent,LeftLeftComponent,LeftRightComponent,RightLeftComponent,RightRightComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
