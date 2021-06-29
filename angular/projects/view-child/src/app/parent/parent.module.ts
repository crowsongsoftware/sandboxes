import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildModule } from './child/child.module';
import { ParentComponent } from './parent.component';
import { ChildTwoComponent } from './child-two/child-two.component';

@NgModule({
  declarations: [
    ParentComponent,
    ChildTwoComponent
  ],
  imports: [
    CommonModule,
    ChildModule
  ],
  exports: [
    ParentComponent
  ]
})
export class ParentModule {
  constructor(){
    console.log("ParentModule..constructor");
  };
 };
