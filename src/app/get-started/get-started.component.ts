import { DdrCacheService } from './../services/ddr-cache.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  constructor(
    private ddrCache: DdrCacheService
  ) { 
    this.ddrCache.setElement('title', 'Biblioteca DDR')
  }

  ngOnInit() {
  }

}
