import { DdrClickOutsideModule } from './../../directives/ddr-click-outside/ddr-click-outside.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrDetailComponent } from './ddr-detail.component';

@NgModule({
  imports: [
    CommonModule,
    DdrClickOutsideModule
  ],
  declarations: [
    DdrDetailComponent
  ],
  exports: [
    DdrDetailComponent
  ]
})
export class DdrDetailModule { }
