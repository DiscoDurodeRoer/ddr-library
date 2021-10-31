import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  template: ''
})
export class DdrNgModelBase implements ControlValueAccessor {

  private _innerValue: any;
  private _firstTime: boolean;
  private _firstValue: Subject<any>;

  public get value(): any {
    return this._innerValue;
  }
  public set value(value: any) {
    this._innerValue = value;
    if(this.onChange){
      this.onChange(value);
    }
  }

  public get firstValue(): Subject<any> {
    return this._firstValue;
  }

  public set firstValue(value: Subject<any>) {
    this._firstValue = value;
  }
  
  constructor() {
    this._innerValue = null;
    this._firstTime = true;
    this._firstValue = new Subject<any>();
  }

  private onChange: (_: any) => {};

  writeValue(value: any): void {
    if(value !== this._innerValue){
      this.value = value;
      if(this._firstTime){
        this._firstValue.next(this.value);
        this._firstTime = false;
      }
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }

}
