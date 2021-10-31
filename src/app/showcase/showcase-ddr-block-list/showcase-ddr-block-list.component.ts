import { DdrToastService } from './../../../../projects/ddr-library/src/components/ddr-toast/ddr-toast.service';
import { DdrCacheService } from './../../services/ddr-cache.service';
import { DdrSelectedItem } from './../../../../projects/ddr-library/src/common/ddr-selected-item';
import { DdrAction } from './../../../../projects/ddr-library/src/common/ddr-action';
import { Appointment } from './Appointment';
import { DdrBlockItem } from './../../../../projects/ddr-library/src/components/ddr-block-list/bean/ddr-block-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-block-list',
  templateUrl: './showcase-ddr-block-list.component.html',
  styleUrls: ['./showcase-ddr-block-list.component.scss']
})
export class ShowcaseDdrBlockListComponent implements OnInit {

  public blockItems: DdrBlockItem<Appointment>[]

  public CANCEL_APPOINTMENT: string = 'CANCEL_APPOINTMENT';
  public BEFORE_APPOINTMENT: string = 'BEFORE_APPOINTMENT';

  public pagination: number;

  public showHeader: boolean;
  public showBorder: boolean;
  public showInfoAdditional: boolean;
  public showActions: boolean;

  constructor(
    public ddrCache: DdrCacheService,
    private ddrToast: DdrToastService
  ) { 
    this.ddrCache.setElement('title', 'Block list')
    this.blockItems = [];
    this.pagination = 5;
    this.showHeader = true;
    this.showInfoAdditional = true;
    this.showBorder = true;
    this.showActions = true;
  }

  ngOnInit() {

    let appointments: Appointment[] = [
      {
        date: "2021-08-10",
        status: "complete",
        client: "Fernando",
        age: 27
      },
      {
        date: "2021-07-10",
        status: "canceled",
        client: "Nando",
        age: 30
      },
      {
        date: "2021-08-10",
        status: "in course",
        client: "Pepe",
        age: 40
      },
      {
        date: "2021-08-11",
        status: "unknown",
        client: "Alberto",
        age: 80
      },
      {
        date: "2021-09-10",
        status: "complete",
        client: "Jose",
        age: 27
      },
      {
        date: "2021-08-01",
        status: "cancelled",
        client: "Alfredo",
        age: 20
      }
    ];

    let actions: DdrAction<Appointment>[] = [
      {
        label: 'Cancelar cita',
        value: this.CANCEL_APPOINTMENT
      },
      {
        label: 'Ver citas anteriores',
        value: this.BEFORE_APPOINTMENT,
        icon: 'fa fa-file'
      },
    ];

    appointments.forEach(ap => {

      let blockItem = new DdrBlockItem<Appointment>();

      blockItem.item = ap;

      switch (ap.status) {
        case 'complete':
          blockItem.borderColor = 'green';
          break;
        case 'canceled':
          blockItem.borderColor = 'red';
          break;
        case 'in course':
          blockItem.borderColor = 'blue';
          break;
        case 'unknown':
          blockItem.borderColor = 'grey';
          break;
      }

      if(blockItem.item.status !== 'in course'){
        blockItem.actions = actions.slice(1);
      }else{
        blockItem.actions = actions;
      }

      this.blockItems.push(blockItem);

    })

  }

  getAction($event){
    console.log($event);
    this.ddrToast.addInfoMessage('Accion seleccionada', JSON.stringify($event))
  } 

  selectItem($event: DdrSelectedItem<Appointment>){
    console.log($event);
    this.ddrToast.addInfoMessage('Item seleccionado', JSON.stringify($event))
  }

  addBlock(){

    let ap: Appointment = 
    {
      date: "2021-08-10",
      status: "complete",
      client: "Fernando",
      age: 27
    };

    
    let actions: DdrAction<Appointment>[] = [
      {
        label: 'Cancelar cita',
        value: this.CANCEL_APPOINTMENT
      },
      {
        label: 'Ver citas anteriores',
        value: this.BEFORE_APPOINTMENT,
        icon: 'fa fa-file'
      },
    ];
    
    let blockItem = new DdrBlockItem<Appointment>();

    blockItem.item = ap;

    switch (ap.status) {
      case 'complete':
        blockItem.borderColor = 'green';
        break;
      case 'canceled':
        blockItem.borderColor = 'red';
        break;
      case 'in course':
        blockItem.borderColor = 'blue';
        break;
      case 'unknown':
        blockItem.borderColor = 'grey';
        break;
    }

    if(blockItem.item.status !== 'in course'){
      blockItem.actions = actions.slice(1);
    }else{
      blockItem.actions = actions;
    }

    this.blockItems.push(blockItem);

  }

  removeFirstBlock(){
    this.blockItems = this.blockItems.slice(1);
  }

  removeLastBlock(){
    this.blockItems = this.blockItems.slice(0, this.blockItems.length-1);
  }

  showHideHeader(){
    this.showHeader = !this.showHeader;
  }

  showHideInfoAdditional(){
    this.showInfoAdditional = !this.showInfoAdditional;
  }

  showHideActions(){
    this.showActions = !this.showActions;
  }

  showHideBorder(){
    this.showBorder = !this.showBorder;
  }

}
