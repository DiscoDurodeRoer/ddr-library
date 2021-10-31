import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrToggleComponent } from './ddr-toggle.component';
import { DdrNgModelBaseModule } from '../ddr-ng-model-base/ddr-ng-model-base.module';

@NgModule({
  imports: [
    CommonModule,
    DdrNgModelBaseModule
  ],
  declarations: [
    DdrToggleComponent
  ],
  exports: [
    DdrToggleComponent
  ]
})
export class DdrToggleModule { }
