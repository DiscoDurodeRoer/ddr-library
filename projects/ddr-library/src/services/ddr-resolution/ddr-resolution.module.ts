import { DdrResolutionService } from './ddr-resolution.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrResolutionDirective } from './ddr-resolution.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DdrResolutionDirective
  ],
  exports: [
    DdrResolutionDirective
  ],
  providers: [
    DdrResolutionService
  ]
})
export class DdrResolutionModule { }
