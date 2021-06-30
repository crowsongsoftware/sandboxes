import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'component-lifecycle';
  public propInitDeclaration: string = "Property Initialized at Declaration";
  public propInitConstructor: string ;

  private beforeInit(lifecycle: string){
    console.groupCollapsed("appcomponent: beforeInit ", lifecycle);
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  }

  constructor(){
    //this.beforeInit("constructor");
    this.propInitConstructor = "Property Initialized in Constructor";
    console.groupCollapsed("appcomponent: constructor");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  ngOnChanges(){
    //this.beforeInit("ngOnChanges");
    console.groupCollapsed("ngOnChanges");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  ngOnInit(): void {
    //this.beforeInit("ngOnInit");
    console.groupCollapsed("ngOnInit");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit
  ngDoCheck(){
    //this.beforeInit("ngDoCheck");
    console.groupCollapsed("ngDoCheck");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit -> ngDoCheck
  ngAfterContentInit(): void {
    //this.beforeInit("ngAfterContentInit");
    console.groupCollapsed("ngAfterContentInit");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit -> ngDoCheck -> ngAfterContentInit
  // ngOnInit -> ngDoCheck ->  ngAfterViewInit
  ngAfterContentChecked(): void {
    //this.beforeInit("ngAfterContentChecked");
    console.groupCollapsed("ngAfterContentChecked");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  // ngOnInit -> ngDoCheck -> ngAfterContentInit -> ngAfterContentChecked
  ngAfterViewInit(): void {
    //this.beforeInit("ngAfterViewInit");
    console.groupCollapsed("ngAfterViewInit");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };

  ngOnDestroy(){
    //this.beforeInit("ngOnDestroy");
    console.groupCollapsed("ngOnDestroy");
    console.log("propInitDeclaration", this.propInitDeclaration);
    console.log("propInitConstructor", this.propInitConstructor);
    console.groupEnd;
  };
};
