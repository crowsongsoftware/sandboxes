import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grandchild-one',
  templateUrl: './grandchild-one.component.html',
  styleUrls: ['./grandchild-one.component.scss']
})
export class GrandchildOneComponent implements OnInit {
  public messageOne: string = "GrandchildOneComponent";
  public propInitDeclaration: string = "Property Initialized at Declaration";
  public propInitConstructor: string ;

  private beforeInit(lifecycle: string){
    console.groupCollapsed("GrandChildOneComponent: beforeInit ", lifecycle);
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  }

  constructor(){
    //this.beforeInit("constructor");
    this.propInitConstructor = "Property Initialized in Constructor";
    console.groupCollapsed("GrandChildOneComponent: constructor");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  ngOnChanges(){
    //this.beforeInit("ngOnChanges");
    console.groupCollapsed("GrandChildOneComponent: ngOnChanges");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  ngOnInit(): void {
    //this.beforeInit("ngOnInit");
    console.groupCollapsed("GrandChildOneComponent: ngOnInit");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit
  ngDoCheck(){
    //this.beforeInit("ngDoCheck");
    console.groupCollapsed("GrandChildOneComponent: ngDoCheck");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit -> ngDoCheck
  ngAfterContentInit(): void {
    //this.beforeInit("ngAfterContentInit");
    console.groupCollapsed("GrandChildOneComponent: ngAfterContentInit");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit -> ngDoCheck -> ngAfterContentInit
  // ngOnInit -> ngDoCheck ->  ngAfterViewInit
  ngAfterContentChecked(): void {
    //this.beforeInit("ngAfterContentChecked");
    console.groupCollapsed("GrandChildOneComponent: ngAfterContentChecked");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit -> ngDoCheck -> ngAfterContentInit -> ngAfterContentChecked
  ngAfterViewInit(): void {
    //this.beforeInit("ngAfterViewInit");
    console.groupCollapsed("GrandChildOneComponent: ngAfterViewInit");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  ngOnDestroy(){
    //this.beforeInit("ngOnDestroky");
    console.groupCollapsed("GrandChildOneComponent: ngOnDestroy");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };
};
