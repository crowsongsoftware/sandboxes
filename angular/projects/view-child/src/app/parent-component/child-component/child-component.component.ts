import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
