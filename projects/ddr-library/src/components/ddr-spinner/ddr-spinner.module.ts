import { DdrSpinnerService } from './ddr-spinner.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrSpinnerComponent } from './ddr-spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DdrSpinnerComponent
  ],
  exports: [
    DdrSpinnerComponent
  ],
  providers: [
    DdrSpinnerService
  ]
})
export class DdrSpinnerModule { }
