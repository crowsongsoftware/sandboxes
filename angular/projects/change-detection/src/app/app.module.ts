import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetManagerModule } from './widget/widget-manager/widget-manager.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
