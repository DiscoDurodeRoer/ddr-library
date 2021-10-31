import { DdrConfigService } from './ddr-config.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ddrConfig'
})
export class DdrConfigPipe implements PipeTransform {

  constructor(
    private ddrConfig: DdrConfigService
  ){}

  transform(path: string): any {
    return this.ddrConfig.getData(path);
  }

}
