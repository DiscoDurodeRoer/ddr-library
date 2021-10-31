import { DdrSpinnerService } from './../../../../projects/ddr-library/src/components/ddr-spinner/ddr-spinner.service';
import { DdrToastService } from './../../../../projects/ddr-library/src/components/ddr-toast/ddr-toast.service';
import { DdrCacheService } from './../../services/ddr-cache.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-load-iframe',
  templateUrl: './showcase-ddr-load-iframe.component.html',
  styleUrls: ['./showcase-ddr-load-iframe.component.scss']
})
export class ShowcaseDdrLoadIframeComponent {

  constructor(
    private ddrSpinner: DdrSpinnerService,
    private ddrCache: DdrCacheService,
    private ddrToast: DdrToastService
  ) { 
    this.ddrCache.setElement('title', 'Load iframe');
    this.ddrSpinner.showSpinner();
  }

  load(){
    console.log("Iframe cargado");
    this.ddrToast.addSuccessMessage("Exito", "Se ha cargado el iframe")
    this.ddrSpinner.hideSpinner();
  }

}
