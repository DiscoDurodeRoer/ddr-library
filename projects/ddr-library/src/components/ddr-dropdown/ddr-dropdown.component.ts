import { DdrNgModelBase } from './../ddr-ng-model-base/ddr-ng-model-base.component';
import { DdrSelectItem } from './../../common/ddr-select-item';
import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation, ContentChild, TemplateRef, forwardRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEqual } from 'lodash-es';
 
@Component({
  selector: 'ddr-dropdown',
  templateUrl: './ddr-dropdown.component.html',
  styleUrls: ['./ddr-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('overlayAnimation', [
      state('void', style({
        transform: 'translateY(5%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => visible', animate('225ms ease-out')),
      transition('void => visible', animate('195ms ease-in')),
    ])
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrDropdownComponent),
      multi: true
    }
  ]
})
export class DdrDropdownComponent extends DdrNgModelBase implements OnInit {

  @Input() options: DdrSelectItem[] = [];
  @Input() labelNoResults: string = 'No results';

  @Output() selectItem: EventEmitter<DdrSelectItem>;

  @ContentChild(TemplateRef, {static: false}) template: TemplateRef<any>;

  public showItems: boolean;
  public optionsShow: DdrSelectItem[];
  public valueShow: string;

  constructor() { 
    super();
    this.showItems = false;
    this.selectItem = new EventEmitter<DdrSelectItem>();
  }

  ngOnInit() {

    this.optionsShow = this.options.slice(0);

    this.firstValue.subscribe( (v: any) => {
      this.preload(v);
    })

  }

  preload(v: any){
    let optionFound = this.options.find(option => isEqual(option.value, v));
    if(optionFound){
      this.valueShow = optionFound.label;
      this.onSelectItem(optionFound);
    }

  }

  showPanelOptions(){
    this.showItems = !this.showItems;
  }

  filter(searchWord: string){
    this.optionsShow = this.options.filter(option => option.label.toLowerCase().includes(searchWord.toLowerCase()));
  }

  onSelectItem(item: DdrSelectItem){
    this.showItems = false;
    console.log(item);
    this.valueShow = item.label;
    this.value = item.value;
    this.selectItem.emit(item);
  }

  hidePanelItems(){
    this.showItems = false;
  }


}
