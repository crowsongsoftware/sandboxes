import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  public propInitDeclaration: string = "Property Initialized at Declaration";
  public propInitConstructor: string ;

  private beforeInit(lifecycle: string){
    console.groupCollapsed("ChildOneComponent: beforeInit ", lifecycle);
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  }

  constructor(){
    //this.beforeInit("constructor");
    this.propInitConstructor = "Property Initialized in Constructor";
    console.groupCollapsed("ChildOneComponent: constructor");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  ngOnChanges(){
    //this.beforeInit("ngOnChanges");
    console.groupCollapsed("ChildOneComponent: ngOnChanges");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  ngOnInit(): void {
    //this.beforeInit("ngOnInit");
    console.groupCollapsed("ChildOneComponent: ngOnInit");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit
  ngDoCheck(){
    //this.beforeInit("ngDoCheck");
    console.groupCollapsed("ChildOneComponent: ngDoCheck");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit -> ngDoCheck
  ngAfterContentInit(): void {
    //this.beforeInit("ngAfterContentInit");
    console.groupCollapsed("ChildOneComponent: ngAfterContentInit");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit -> ngDoCheck -> ngAfterContentInit
  // ngOnInit -> ngDoCheck ->  ngAfterViewInit
  ngAfterContentChecked(): void {
    //this.beforeInit("ngAfterContentChecked");
    console.groupCollapsed("ChildOneComponent: ngAfterContentChecked");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit -> ngDoCheck -> ngAfterContentInit -> ngAfterContentChecked
  ngAfterViewInit(): void {
    //this.beforeInit("ngAfterViewInit");
    console.groupCollapsed("ChildOneComponent: ngAfterViewInit");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  ngOnDestroy(){
    //this.beforeInit("ngOnDestroy");
    console.groupCollapsed("ChildOneComponent: ngOnDestroy");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };
};
