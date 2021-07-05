import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetManagerComponent } from './widget-manager.component';
import { WidgetListComponent } from './components/widget/widget-list.component';

@NgModule({
  declarations: [
    WidgetManagerComponent,
    WidgetListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WidgetManagerComponent
  ]
})
export class WidgetManagerModule { }
