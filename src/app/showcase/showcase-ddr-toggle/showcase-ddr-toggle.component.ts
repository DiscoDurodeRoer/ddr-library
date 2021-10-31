import { DdrToastService } from './../../../../projects/ddr-library/src/components/ddr-toast/ddr-toast.service';
import { DdrCacheService } from './../../services/ddr-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-toggle',
  templateUrl: './showcase-ddr-toggle.component.html',
  styleUrls: ['./showcase-ddr-toggle.component.scss']
})
export class ShowcaseDdrToggleComponent {

  public valueEx3: boolean;

  constructor(
    private ddrCache: DdrCacheService,
    private ddrToast: DdrToastService
  ) {
    this.valueEx3 = true;
    this.ddrCache.setElement('title', 'Toggle');
  }

  changeToggle($event) {
    if($event){
      this.ddrToast.addSuccessMessage("Exito", "El toggle se ha activado");
    }else{
      this.ddrToast.addSuccessMessage("Exito", "El toggle se ha desactivado");
    }
  }


}
