import { Component, Input, OnInit } from '@angular/core';
import { Widget } from '../../../models/widget';

@Component({
  selector: 'widget',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit {
  @Input() widgets: Array<Widget> = [];

  constructor() { };

  ngOnInit(): void { };
};
