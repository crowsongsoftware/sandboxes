import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementDecrementComponent } from './increment-decrement.component';

@NgModule({
  declarations: [
    IncrementDecrementComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IncrementDecrementComponent
  ]
})
export class IncrementDecrementModule {};
