import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParentModule } from './parent/parent.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
