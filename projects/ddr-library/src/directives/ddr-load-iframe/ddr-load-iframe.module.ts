import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrLoadIframeDirective } from './ddr-load-iframe.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [	
    DdrLoadIframeDirective
  ],
  exports:[
    DdrLoadIframeDirective
  ]
})
export class DdrLoadIframeModule { }
