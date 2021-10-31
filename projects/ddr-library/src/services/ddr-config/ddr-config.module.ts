import { DdrConfigService } from './ddr-config.service';
import { NgModule } from '@angular/core';
import { DdrConfigPipe } from './ddr-config.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
    DdrConfigPipe
  ],
  exports: [
    DdrConfigPipe
  ],
  providers: [
    DdrConfigService
  ]
})
export class DdrConfigModule { }
