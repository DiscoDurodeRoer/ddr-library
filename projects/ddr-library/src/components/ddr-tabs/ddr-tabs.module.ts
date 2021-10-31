import { DdrTabItemComponent } from './ddr-tab-item/ddr-tab-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrTabsComponent } from './ddr-tabs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DdrTabsComponent,
    DdrTabItemComponent
  ],
  exports: [
    DdrTabsComponent,
    DdrTabItemComponent
  ]
})
export class DdrTabsModule { }
