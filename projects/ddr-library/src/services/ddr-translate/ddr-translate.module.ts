import { HttpClientModule } from '@angular/common/http';
import { DdrTranslatePipe } from './ddr-translate.pipe';
import { DdrTranslateService } from './ddr-translate.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    DdrTranslatePipe
  ],
  exports: [
    DdrTranslatePipe
  ],
  providers: [
    DdrTranslateService
  ]
})
export class DdrTranslateModule { }
