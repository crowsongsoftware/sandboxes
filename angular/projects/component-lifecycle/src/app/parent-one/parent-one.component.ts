import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss']
})
export class ParentOneComponent implements OnInit {
  public propInitDeclaration: string = "Property Initialized at Declaration";
  public propInitConstructor: string ;

  private beforeInit(lifecycle: string){
    console.groupCollapsed("ParentOneComponent: beforeInit ", lifecycle);
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  }

  constructor(){
    //this.beforeInit("constructor");
    this.propInitConstructor = "Property Initialized in Constructor";
    console.groupCollapsed("ParentOneComponent: constructor");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  ngOnChanges(){
    //this.beforeInit("ngOnChanges");
    console.groupCollapsed("ParentOneComponent: ngOnChanges");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  ngOnInit(): void {
    //this.beforeInit("ngOnInit");
    console.groupCollapsed("ParentOneComponent: ngOnInit");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit
  ngDoCheck(){
    //this.beforeInit("ngDoCheck");
    console.groupCollapsed("ParentOneComponent: ngDoCheck");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit -> ngDoCheck
  ngAfterContentInit(): void {
    //this.beforeInit("ngAfterContentInit");
    console.groupCollapsed("ParentOneComponent: ngAfterContentInit");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit -> ngDoCheck -> ngAfterContentInit
  // ngOnInit -> ngDoCheck ->  ngAfterViewInit
  ngAfterContentChecked(): void {
    //this.beforeInit("ngAfterContentChecked");
    console.groupCollapsed("ParentOneComponent: ngAfterContentChecked");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit -> ngDoCheck -> ngAfterContentInit -> ngAfterContentChecked
  ngAfterViewInit(): void {
    //this.beforeInit("ngAfterViewInit");
    console.groupCollapsed("ParentOneComponent: ngAfterViewInit");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  ngOnDestroy(){
    //this.beforeInit("ngOnDestroy");
    console.groupCollapsed("ParentOneComponent: ngOnDestroy");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };
};
