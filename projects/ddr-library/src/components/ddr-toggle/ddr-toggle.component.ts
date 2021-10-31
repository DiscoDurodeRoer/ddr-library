import { DdrNgModelBase } from './../ddr-ng-model-base/ddr-ng-model-base.component';
import { Component, EventEmitter, OnInit, ViewEncapsulation, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ddr-toggle',
  templateUrl: './ddr-toggle.component.html',
  styleUrls: ['./ddr-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrToggleComponent),
      multi: true
    }
  ]
})
export class DdrToggleComponent extends DdrNgModelBase  {

  @Input() label: string;
  @Output() toggled: EventEmitter<boolean>;

  constructor() { 
    super();
    this.toggled = new EventEmitter<boolean>();
  }

  onClick(){
    this.value = !this.value;
    this.toggled.emit(this.value);
  }

}
