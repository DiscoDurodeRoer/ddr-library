import { DdrConstantsService } from './../ddr-constants.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DdrResolutionService {

  private _size: string;

  public get size(): string {
    return this._size;
  }
  public set size(value: string) {
    this._size = value;
  }

  constructor(
    private constants: DdrConstantsService
  ) { }

  setSize(width: number) {

    if (width >= this.constants.DdrResolutionConstants.MOBILE_MIN &&
      width < this.constants.DdrResolutionConstants.MOBILE_MAX) {
      this._size = this.constants.DdrResolutionConstants.MOBILE;
    } else if (width >= this.constants.DdrResolutionConstants.TABLET_MIN &&
      width < this.constants.DdrResolutionConstants.TABLET_MAX) {
      this._size = this.constants.DdrResolutionConstants.TABLET;
    } else if (width >= this.constants.DdrResolutionConstants.WEB_MIN &&
      width < this.constants.DdrResolutionConstants.WEB_MAX) {
      this._size = this.constants.DdrResolutionConstants.WEB;
    }


  }


}
