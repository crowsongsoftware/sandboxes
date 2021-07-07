import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetListComponent } from './widget-list.component';

@NgModule({
  declarations: [
    WidgetListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports:[
    WidgetListComponent
  ]
})
export class WidgetListModule { }
