import { Component, OnInit } from '@angular/core';
import { Widget } from '../models/widget';
import { widgetList } from '../data/widgetList';

@Component({
  selector: 'widget-manager',
  templateUrl: './widget-manager.component.html',
  styleUrls: ['./widget-manager.component.scss']
})
export class WidgetManagerComponent implements OnInit {
  public wigets: Array<Widget>;

  constructor() { 
    this.wigets = widgetList;
  };

  ngOnInit(): void { };
};
