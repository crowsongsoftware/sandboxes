import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'parent-component',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit, AfterViewInit {
  public childComponentName: string = '';
  public message: string = '';

  @ViewChild(ChildComponent, { static: false }) childComponent!: ChildComponent;

  constructor() { 
    console.log("ParentComponent..constructor");
  };

  ngOnInit(): void { };

  ngAfterViewInit(){ 
    console.log("ParentComponent..ngAfterViewInit");
    console.log("childComponent: ", this.childComponent);
    console.log("childComponent.componentName: ", this.childComponent.componentName);
  };
};
