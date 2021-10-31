import { DdrConstantsService } from './../../services/ddr-constants.service';
import { Injectable } from '@angular/core';
import { DdrToast } from './bean/ddr-toast';

@Injectable({
  providedIn: 'root'
})
export class DdrToastService {

  private _toasts: DdrToast[];
  private _timeout: number;

  public get toasts(): DdrToast[]{
    return this._toasts;
  }

  public get timeout(): number{
    return this._timeout;
  }

  public set timeout(value: number){
    this._timeout = value;
  }

  constructor(private constans: DdrConstantsService){
    this._toasts = [];
    this._timeout = this.constans.DdrToastConstants.TIMEOUT;
  }

  addInfoMessage(title: string, message: string){
    this.addMessage(title, message, this.constans.DdrToastConstants.TYPE_INFO);
  }
  
  addWarningMessage(title: string, message: string){
    this.addMessage(title, message, this.constans.DdrToastConstants.TYPE_WARNING);
  }
  
  addErrorMessage(title: string, message: string){
    this.addMessage(title, message, this.constans.DdrToastConstants.TYPE_ERROR);
  }
  
  addSuccessMessage(title: string, message: string){
    this.addMessage(title, message, this.constans.DdrToastConstants.TYPE_SUCCESS);
  }

  private addMessage(title: string, message: string, type: string){
    let toast: DdrToast = new DdrToast(title, message, type);
    this._toasts.push(toast);
    setTimeout(() => {
      this.closeToast(toast);
    }, this._timeout);
  }

  closeToast(toast: DdrToast){
    let index: number = this._toasts.findIndex(t => t === toast);
    if (index !== -1) {
      this._toasts.splice(index, 1);
    }
  }


}
