import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
  public componentName: string = "ChildComponent";
  
  constructor() {
    console.log("ChildComponent; constructor");
  }

  ngOnInit(): void {
  }

}
