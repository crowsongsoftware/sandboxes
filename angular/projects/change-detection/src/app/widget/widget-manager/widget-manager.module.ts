import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetListModule } from './components/widget-list/widget-list.module';
import { WidgetManagerComponent } from './widget-manager.component';

@NgModule({
  declarations: [
    WidgetManagerComponent
  ],
  imports: [
    CommonModule,
    WidgetListModule
  ],
  exports:[
    WidgetManagerComponent
  ]
})
export class WidgetManagerModule { }
