import { DdrToastService } from './../../../../projects/ddr-library/src/components/ddr-toast/ddr-toast.service';
import { DdrCacheService } from './../../services/ddr-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-accordion',
  templateUrl: './showcase-accordion.component.html',
  styleUrls: ['./showcase-accordion.component.scss']
})
export class ShowcaseAccordionComponent  {

  constructor(
    public ddrCache: DdrCacheService,
    public ddrToastService: DdrToastService
  ) {
    this.ddrCache.setElement('title', 'Accordion');
  }

  openAccordionEx1($event){
    if($event){
      this.ddrToastService.addSuccessMessage("Exito", "Abriendo el acordeon 1");
    }else{
      this.ddrToastService.addSuccessMessage("Exito", "Cerrando el acordeon 1");
    }
  }

  openAccordionEx2($event){
    if($event){
      this.ddrToastService.addSuccessMessage("Exito", "Abriendo el acordeon 1");
    }else{
      this.ddrToastService.addSuccessMessage("Exito", "Cerrando el acordeon 1");
    }
  }

}
