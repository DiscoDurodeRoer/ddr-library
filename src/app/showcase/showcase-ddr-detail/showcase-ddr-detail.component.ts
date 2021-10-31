import { DdrCacheService } from './../../services/ddr-cache.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-detail',
  templateUrl: './showcase-ddr-detail.component.html',
  styleUrls: ['./showcase-ddr-detail.component.scss']
})
export class ShowcaseDdrDetailComponent implements OnInit {

  public showDetail: boolean;
  public showTitle: boolean;
  public showOverlay: boolean;

  constructor(private ddrCache: DdrCacheService) { 
    this.ddrCache.setElement('title', 'Detail');
    this.showOverlay = true;
    this.showTitle = true;
  }

  ngOnInit() {
  }

  closeDetail(){
    this.showDetail = false;
  }

  openDetailEx1(){
    this.showOverlay = true;
    this.showTitle = true;
    this.showDetail = true;
  }

  openDetailEx2(){
    this.showOverlay = true;
    this.showTitle = false;
    this.showDetail = true;
  }

  openDetailEx3(){
    this.showOverlay = false;
    this.showTitle = true;
    this.showDetail = true;
  }

}
