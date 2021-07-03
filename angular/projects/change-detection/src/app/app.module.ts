import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetManagerComponent } from './widget/widget-manager/widget-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WidgetManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
