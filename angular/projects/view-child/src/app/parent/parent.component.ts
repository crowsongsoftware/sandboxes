import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'parent-component',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit, AfterViewInit {
  public message: string = '';

  //@ViewChild('ChildComponent') childComponent: ChildComponent = null;

  constructor() { };

  ngOnInit(): void { };

  ngAfterViewInit(){ };

};
