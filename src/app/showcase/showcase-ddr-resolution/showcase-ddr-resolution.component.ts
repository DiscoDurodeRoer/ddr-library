import { DdrCacheService } from './../../services/ddr-cache.service';
import { DdrConstantsService } from './../../../../projects/ddr-library/src/services/ddr-constants.service';
import { DdrResolutionService } from './../../../../projects/ddr-library/src/services/ddr-resolution/ddr-resolution.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-resolution',
  templateUrl: './showcase-ddr-resolution.component.html',
  styleUrls: ['./showcase-ddr-resolution.component.scss']
})
export class ShowcaseDdrResolutionComponent {

  constructor(
    public ddrResolution: DdrResolutionService,
    public ddrConstants: DdrConstantsService,
    private ddrCache: DdrCacheService
  ) { 
    this.ddrCache.setElement('title', 'Resolution');
  }

}
