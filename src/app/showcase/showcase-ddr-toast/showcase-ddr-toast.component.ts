import { DdrToastService } from './../../../../projects/ddr-library/src/components/ddr-toast/ddr-toast.service';
import { DdrCacheService } from './../../services/ddr-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-toast',
  templateUrl: './showcase-ddr-toast.component.html',
  styleUrls: ['./showcase-ddr-toast.component.scss']
})
export class ShowcaseDdrToastComponent {

  constructor(
    private ddrToast: DdrToastService,
    private ddrCache: DdrCacheService
  ) { 
    this.ddrCache.setElement('title', 'Toast');
  }

  addInfo(){
    this.ddrToast.addInfoMessage("info", "mensaje info");
  }

  addError(){
    this.ddrToast.addErrorMessage("error", "mensaje error");
  }

  addWarning(){
    this.ddrToast.addWarningMessage("warning", "mensaje warning");
  }

  addSuccess(){
    this.ddrToast.addSuccessMessage("success", "mensaje success");
  }

}
