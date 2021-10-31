import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrJoinPipe } from './ddr-join.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DdrJoinPipe
  ],
  exports: [
    DdrJoinPipe
  ]
})
export class DdrJoinPipeModule { }
