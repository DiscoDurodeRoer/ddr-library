import { DdrClickOutsideModule } from './../../directives/ddr-click-outside/ddr-click-outside.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrModalComponent } from './ddr-modal.component';
import { DdrModalService } from './ddr-modal.service';

@NgModule({
  imports: [
    CommonModule,
    DdrClickOutsideModule
  ],
  declarations: [
    DdrModalComponent
  ],
  exports: [
    DdrModalComponent
  ],
  providers: [
    DdrModalService
  ]
})
export class DdrModalModule { }
