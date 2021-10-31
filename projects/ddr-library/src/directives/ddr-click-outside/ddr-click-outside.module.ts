import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrClickOutsideDirective } from './ddr-click-outside.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DdrClickOutsideDirective
  ],
  exports: [
    DdrClickOutsideDirective
  ]
})
export class DdrClickOutsideModule { }
