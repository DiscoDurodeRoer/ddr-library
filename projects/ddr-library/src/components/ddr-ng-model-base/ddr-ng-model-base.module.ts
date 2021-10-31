import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrNgModelBase } from './ddr-ng-model-base.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DdrNgModelBase
  ],
  exports: [
    DdrNgModelBase
  ]
})
export class DdrNgModelBaseModule { }
