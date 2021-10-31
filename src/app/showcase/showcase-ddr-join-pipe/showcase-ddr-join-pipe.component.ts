import { DdrCacheService } from './../../services/ddr-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-join-pipe',
  templateUrl: './showcase-ddr-join-pipe.component.html',
  styleUrls: ['./showcase-ddr-join-pipe.component.css']
})
export class ShowcaseDdrJoinPipeComponent {

  public valoresNulo = null;
  public valores: string[];

  constructor(
    private ddrCache: DdrCacheService
  ) {
    this.ddrCache.setElement('title', 'Join pipe');
    this.valores = [
      "1", "2", "3", "4", "5"
    ];
   }


}
