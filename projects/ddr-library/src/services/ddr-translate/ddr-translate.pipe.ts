import { DdrTranslateService } from './ddr-translate.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ddrTranslate'
})
export class DdrTranslatePipe implements PipeTransform {

  constructor(private translateService: DdrTranslateService) {}

  transform(value: string): any {
    return this.translateService.getTranslate(value) ? this.translateService.getTranslate(value) : value;
  }

}
