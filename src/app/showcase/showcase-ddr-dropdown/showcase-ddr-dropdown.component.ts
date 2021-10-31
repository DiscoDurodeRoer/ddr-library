import { DdrToastService } from './../../../../projects/ddr-library/src/components/ddr-toast/ddr-toast.service';
import { DdrSelectItem } from './../../../../projects/ddr-library/src/common/ddr-select-item';
import { DdrCacheService } from './../../services/ddr-cache.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-dropdown',
  templateUrl: './showcase-ddr-dropdown.component.html',
  styleUrls: ['./showcase-ddr-dropdown.component.scss']
})
export class ShowcaseDdrDropdownComponent implements OnInit {

  public options: DdrSelectItem[];
  public valueEx2: any;
  public valueEx3: any;

  constructor(
    private ddrToast: DdrToastService,
    private ddrCache: DdrCacheService
  ) { 
    this.ddrCache.setElement('title', 'Dropdown')
  }

  ngOnInit() {
    this.options = [
      new DdrSelectItem("Label1", "Value1"),
      new DdrSelectItem("Label2", "Value2"),
      new DdrSelectItem("Label3", "Value3"),
      new DdrSelectItem("Label4", "Value4"),
    ];

    this.valueEx2 = "Value3";
    this.valueEx3 = "Value3";
  }

  select($event){
    console.log($event);
    this.ddrToast.addInfoMessage("Exito", "Has elegido: " + JSON.stringify($event))
  }

}
