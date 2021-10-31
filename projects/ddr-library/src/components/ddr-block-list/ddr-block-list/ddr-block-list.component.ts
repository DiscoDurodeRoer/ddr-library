import { DdrSelectedItem } from './../../../common/ddr-selected-item';
import { DdrAction } from './../../../common/ddr-action';
import { DdrBlockListItemComponent } from './../ddr-block-list-item/ddr-block-list-item.component';
import { DdrConstantsService } from './../../../services/ddr-constants.service';
import { DdrBlockItem } from './../bean/ddr-block-item';
import { Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewEncapsulation, TemplateRef, ViewChildren, QueryList, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ddr-block-list',
  templateUrl: './ddr-block-list.component.html',
  styleUrls: ['./ddr-block-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdrBlockListComponent<T> implements OnInit, OnChanges {

  @Input() blockItems: DdrBlockItem<T>[];
  @Input() labelNoResults: string = 'No results';

  @Input() showHeader: boolean = true;
  @Input() showInfoAdditional: boolean = true;
  @Input() showActions: boolean = true;
  @Input() showBorder: boolean = true;

  @Input() pagination: number = this.constants.DdrBlockListConstants.PAGINATION_DEFAULT;
  @Input() previousLabel: string = 'Previuos';
  @Input() nextLabel: string = 'Next';

  @Output() itemSelected: EventEmitter<DdrSelectedItem<T>>;
  @Output() actionSelected: EventEmitter<DdrAction<T>>;

  @ContentChild("templateHeader", {static: false}) templateHeader: TemplateRef<any>;
  @ContentChild("templateInfoAdditional", {static: false}) templateInfoAdditional: TemplateRef<any>;
  @ContentChild("templateData", {static: false}) templateData: TemplateRef<any>;

  public page: number;

  @ViewChildren(DdrBlockListItemComponent) blocks: QueryList<DdrBlockListItemComponent<T>>;

  constructor(
    private constants: DdrConstantsService
  ) { 
    this.page = 1;
    this.itemSelected = new EventEmitter<DdrSelectedItem<T>>();
    this.actionSelected = new EventEmitter<DdrAction<T>>();
  }

  ngOnInit() {
    if(this.pagination < 0){
      this.pagination = this.constants.DdrBlockListConstants.PAGINATION_DEFAULT;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes){
      if(changes['blockItems'] && !changes['blockItems'].firstChange){
        if( ((this.page - 1) * this.pagination) == changes['blockItems'].currentValue.length ){
          this.page = this.page - 1;
        }
      }
    }
  }
  

  sendAction($event: DdrAction<T>){
    this.actionSelected.emit($event);
  }

  selectItem(blockItem: DdrBlockItem<T>, index: number){
    let selectedItem = new DdrSelectedItem<T>();
    selectedItem.item = blockItem.item;
    selectedItem.index = ((this.page - 1) * this.pagination) + index;
    this.itemSelected.emit(selectedItem);
  }
  
  closeAllOptionsExcept(id: string){

    this.blocks.forEach(block => {
      if(block.id !== id){
        block.showOptions = false;
      }
    })

  }

}
