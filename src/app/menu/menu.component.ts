import { DdrThemeService } from './../../../projects/ddr-library/src/services/ddr-theme.service';
import { DdrSelectItem } from './../../../projects/ddr-library/src/common/ddr-select-item';
import { DdrConstantsService } from './../../../projects/ddr-library/src/services/ddr-constants.service';
import { DdrModalService } from './../../../projects/ddr-library/src/components/ddr-modal/ddr-modal.service';
import { cloneDeep } from 'lodash-es';
import { DdrConfigService } from './../../../projects/ddr-library/src/services/ddr-config/ddr-config.service';
import { DdrDetailComponent } from './../../../projects/ddr-library/src/components/ddr-detail/ddr-detail.component';
import { Component, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { DdrCacheService } from '../services/ddr-cache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ddr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {

  public menuItemsOri: any[];
  public menuItemsFiltered: any[];
  public showMenuItems: boolean;
  public themes: DdrSelectItem[];

  @ViewChild(DdrDetailComponent, {static: false}) detail: DdrDetailComponent;
  @ViewChild("main") main: ElementRef;

  constructor(
    public ddrCache: DdrCacheService,
    public ddrConfig: DdrConfigService,
    private router: Router,
    private ddrModal: DdrModalService,
    public constants: DdrConstantsService,
    private themeService: DdrThemeService
  ) { 
    this.showMenuItems = false;
    this.menuItemsOri = this.ddrConfig.getData('menuItems');
    this.menuItemsFiltered = cloneDeep(this.menuItemsOri);
    this.themes = [
      new DdrSelectItem('Default', this.constants.DdrThemeConstants.THEME_DEFAULT),
      new DdrSelectItem('Dark', this.constants.DdrThemeConstants.THEME_DARK)
    ];
  }


  clickLogo(){
    this.closeDetail();
    this.router.navigateByUrl('get-started');
  }

  goToRoute(route: string){
    this.router.navigateByUrl(route);
    this.closeDetail();
  }

  openCloseMenu(){
    if(this.showMenuItems){
      this.closeDetail();
    }else{
      this.main.nativeElement.scrollTo({ top: 0 })
      this.main.nativeElement.style.overflowY = 'hidden';
      this.showMenuItems = !this.showMenuItems;
    }

  }

  openTheme() {
    this.ddrModal.open("modal-theme");
  }

  closeDetail(){
    if(this.detail){
      this.detail.closeDetail();
    }
    setTimeout(() => {
      this.main.nativeElement.style.overflowY = 'auto';
      this.menuItemsFiltered = this.menuItemsOri;
      this.showMenuItems = false;
    }, 600);
  }

  filterMenuItems($event){

    console.log($event);
    
    if(!$event.target.value){
      this.menuItemsFiltered = this.menuItemsOri;
    }else{
      this.menuItemsFiltered = cloneDeep(this.menuItemsOri).filter(mi => {
        mi.children = mi.children.filter(m => m.text.toLowerCase().includes($event.target.value.toLowerCase()));
        return mi.children.length > 0;
      })
    }

  }

  changeTheme($event: DdrSelectItem){
    this.themeService.changeTheme($event.value);
  }

}
