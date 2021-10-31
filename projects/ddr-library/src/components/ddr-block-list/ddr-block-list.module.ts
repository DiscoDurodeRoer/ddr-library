import { DdrClickOutsideModule } from './../../directives/ddr-click-outside/ddr-click-outside.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrBlockListItemComponent } from './ddr-block-list-item/ddr-block-list-item.component';
import { DdrBlockListDataItemComponent } from './ddr-block-list-data-item/ddr-block-list-data-item.component';
import { DdrBlockListComponent } from './ddr-block-list/ddr-block-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    DdrClickOutsideModule,
    NgxPaginationModule
  ],
  declarations: [
    DdrBlockListItemComponent,
    DdrBlockListDataItemComponent,
    DdrBlockListComponent
  ],
  exports: [
    DdrBlockListComponent,
    DdrBlockListDataItemComponent
  ]
})
export class DdrBlockListModule { }
