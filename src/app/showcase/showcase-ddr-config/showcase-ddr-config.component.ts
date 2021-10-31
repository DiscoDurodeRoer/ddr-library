import { DdrCacheService } from './../../services/ddr-cache.service';
import { DdrConfigService } from './../../../../projects/ddr-library/src/services/ddr-config/ddr-config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-config',
  templateUrl: './showcase-ddr-config.component.html',
  styleUrls: ['./showcase-ddr-config.component.scss']
})
export class ShowcaseDdrConfigComponent {

  constructor(
    private ddrConfig: DdrConfigService,
    private ddrCache: DdrCacheService
  ) {
    this.ddrCache.setElement('title', 'Config');
    console.log(this.ddrConfig.getAllData());
    console.log(this.ddrConfig.getData('variable2'));
  }

}
