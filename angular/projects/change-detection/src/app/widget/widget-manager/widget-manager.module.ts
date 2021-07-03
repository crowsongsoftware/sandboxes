import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetManagerComponent } from './widget-manager.component';

@NgModule({
  declarations: [
    WidgetManagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WidgetManagerComponent
  ]
})
export class WidgetManagerModule { }
