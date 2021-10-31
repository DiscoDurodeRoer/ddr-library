import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrAccordionComponent } from './ddr-accordion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DdrAccordionComponent
  ],
  exports: [
    DdrAccordionComponent
  ]
})
export class DdrAccordionModule { }
