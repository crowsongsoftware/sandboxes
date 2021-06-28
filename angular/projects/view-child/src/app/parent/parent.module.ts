import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildModule } from './child/child.module';
import { ParentComponent } from './parent.component';

@NgModule({
  declarations: [
    ParentComponent
  ],
  imports: [
    CommonModule,
    ChildModule
  ],
  exports: [
    ParentComponent
  ]
})
export class ParentModule { }
