import { cloneDeep } from 'lodash-es';
import { DdrAction } from './../../../common/ddr-action';
import { DdrBlockItem } from './../bean/ddr-block-item';
import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ddr-block-list-item',
  templateUrl: './ddr-block-list-item.component.html',
  styleUrls: ['./ddr-block-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdrBlockListItemComponent<T> implements OnInit {

  @Input() blockItem: DdrBlockItem<T>;
  @Input() id: string;

  @Input() showHeader: boolean = true;
  @Input() showInfoAdditional: boolean = true;
  @Input() showActions: boolean = true;
  @Input() showBorder: boolean = true;

  @Input() templateHeader: TemplateRef<any>;
  @Input() templateInfoAdditional: TemplateRef<any>;
  @Input() templateData: TemplateRef<any>;

  @Output() actionSelected: EventEmitter<DdrAction<T>>;
  @Output() closeOptions: EventEmitter<string>;

  public showOptions: boolean;

  constructor() { 
    this.actionSelected = new EventEmitter<DdrAction<T>>();
    this.closeOptions = new EventEmitter<string>();
    this.showOptions = false;
  }

  ngOnInit() {
    this.showActions = this.showActions && this.blockItem.actions && this.blockItem.actions.length > 0;
  }

  openActions($event: MouseEvent){
    $event.stopPropagation();
    this.showOptions = true;
    this.closeOptions.emit(this.id);
  }

  sendAction($event: MouseEvent, action: DdrAction<T>, index:number){
    $event.stopPropagation();
    this.showOptions = false;
    let actionSended: DdrAction<T> = cloneDeep(action);
    actionSended.item = this.blockItem.item;
    this.actionSelected.emit(actionSended);
  }

  hideOptions(){
    this.showOptions = false;
  }

}
