import { DdrCacheService } from './../../services/ddr-cache.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-tabs',
  templateUrl: './showcase-ddr-tabs.component.html',
  styleUrls: ['./showcase-ddr-tabs.component.scss']
})
export class ShowcaseDdrTabsComponent{

  constructor(private ddrCache: DdrCacheService) { 
    this.ddrCache.setElement('title', 'Tabs');
  }

}
