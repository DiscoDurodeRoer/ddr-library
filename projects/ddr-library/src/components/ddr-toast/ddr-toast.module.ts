import { DdrToastService } from './ddr-toast.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrToastComponent } from './ddr-toast.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DdrToastComponent
  ],
  exports: [
    DdrToastComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class DdrToastModule { }
