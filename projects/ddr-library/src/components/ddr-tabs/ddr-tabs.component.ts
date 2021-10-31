import { DdrTabItemComponent } from './ddr-tab-item/ddr-tab-item.component';
import { Component, ContentChildren, OnInit, ViewEncapsulation, QueryList, AfterViewInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'ddr-tabs',
  templateUrl: './ddr-tabs.component.html',
  styleUrls: ['./ddr-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdrTabsComponent implements AfterViewInit {

  @ContentChildren(DdrTabItemComponent) tabsItems: QueryList<DdrTabItemComponent>;
  public contentTemplate: TemplateRef<any>;

  constructor() { }

  ngAfterViewInit(): void {
    if(this.tabsItems.toArray().length > 0){
      this.open(this.tabsItems.toArray()[0]);
    }
  }

  open(tab: DdrTabItemComponent){
    this.tabsItems.forEach(t => t.selected = false);
    tab.selected = true;
    this.contentTemplate = tab.contentTemplate;
  }

}
