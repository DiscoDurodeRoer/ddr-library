import { DdrToastService } from 'ddr-library';
import { DdrCacheService } from './../../services/ddr-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-clickoutside',
  templateUrl: './showcase-clickoutside.component.html',
  styleUrls: ['./showcase-clickoutside.component.scss']
})
export class ShowcaseClickoutsideComponent {

  public mode: string;

  constructor(
    private ddrToast: DdrToastService,
    private ddrCache: DdrCacheService
  ) {
    this.ddrCache.setElement('title', 'Click Outside');
    this.mode = 'estandar';
  }

  openEstandar() {
    this.mode = 'estandar';
  }

  openDelay() {
    this.mode = 'delay';
  }

  openDesactived() {
    this.mode = 'desactivated';
  }

  openAvoidFirstTime() {
    this.mode = 'avoid first time';
  }

  clickOutside($event) {
    console.log($event);
    this.ddrToast.addInfoMessage("Exito", "Click fuera")
  }

}
