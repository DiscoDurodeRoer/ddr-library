import { Component, Input, OnInit, ViewChild, ViewEncapsulation, TemplateRef } from '@angular/core';

@Component({
  selector: 'ddr-tab-item',
  templateUrl: './ddr-tab-item.component.html',
  styleUrls: ['./ddr-tab-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdrTabItemComponent {

  @Input() title: string;
  @ViewChild('contentTemplate', {static: false}) contentTemplate: TemplateRef<any>;
  public selected: boolean;

  constructor() { 
    this.selected = false;
  }

}
