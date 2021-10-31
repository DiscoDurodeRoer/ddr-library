import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrDropdownComponent } from './ddr-dropdown.component';
import { FormsModule } from '@angular/forms';
import { DdrClickOutsideModule } from '../../directives/ddr-click-outside/ddr-click-outside.module';
import { DdrNgModelBaseModule } from '../ddr-ng-model-base/ddr-ng-model-base.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DdrClickOutsideModule,
    DdrNgModelBaseModule
  ],
  declarations: [
    DdrDropdownComponent
  ],
  exports: [
    DdrDropdownComponent
  ]
})
export class DdrDropdownModule { }
