import { DdrSpinnerService } from './../../../../projects/ddr-library/src/components/ddr-spinner/ddr-spinner.service';
import { DdrCacheService } from './../../services/ddr-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-spinner',
  templateUrl: './showcase-ddr-spinner.component.html',
  styleUrls: ['./showcase-ddr-spinner.component.css']
})
export class ShowcaseDdrSpinnerComponent {

  public embedded: boolean;

  constructor(
    public ddrSpinner: DdrSpinnerService,
    private ddrCache: DdrCacheService
  ) { 
    this.ddrCache.setElement('title', 'Spinner')
    this.embedded = false;
  }

  showSpinnerEx1(){
    this.embedded = false;
    this.ddrSpinner.showSpinner();
    setTimeout(() => {
      this.ddrSpinner.hideSpinner();
    }, 5000);
  }

  showSpinnerEx2(){
    this.embedded = true;
    this.ddrSpinner.showSpinner();
    setTimeout(() => {
      this.ddrSpinner.hideSpinner();
    }, 5000);
  }


}
