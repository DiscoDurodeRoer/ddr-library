import { DdrToastService } from './../../../../projects/ddr-library/src/components/ddr-toast/ddr-toast.service';
import { DdrCacheService } from './../../services/ddr-cache.service';
import { DdrTranslateService } from './../../../../projects/ddr-library/src/services/ddr-translate/ddr-translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-translate',
  templateUrl: './showcase-ddr-translate.component.html',
  styleUrls: ['./showcase-ddr-translate.component.scss']
})
export class ShowcaseDdrTranslateComponent implements OnInit {

  constructor(
    private ddrCache: DdrCacheService,
    private ddrToast: DdrToastService,
    private translateService: DdrTranslateService,
  ) { 
    this.ddrCache.setElement('title', 'DdrTranslate')
  }

  ngOnInit() {
    console.log(this.translateService.getTranslate('label.example.1'));
    console.log(this.translateService.getTranslate('label.example.2'));
    this.ddrToast.addInfoMessage("Mensaje traducido", "label.example.1 => " + this.translateService.getTranslate('label.example.1'));
    this.ddrToast.addInfoMessage("Mensaje traducido", "label.example.2 => " +this.translateService.getTranslate('label.example.2'));
  }

}
