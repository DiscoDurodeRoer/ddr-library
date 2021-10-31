import { Injectable } from '@angular/core';
import { DdrModalComponent } from './ddr-modal.component';

@Injectable({
  providedIn: 'root'
})
export class DdrModalService {

  private modals: DdrModalComponent[];

  constructor() { 
    this.modals = []
  }

  add(modal: DdrModalComponent){
    if(!this.modals.find(m => m.id === modal.id)){
      this.modals.push(modal);
    }
  }

  remove(id: string){
    this.modals = this.modals.filter(m => m.id != id);
  }

  open(id: string){
    const modal = this.modals.find(x => x.id == id);
    if(modal){
      modal.show = true;
    }else{
      console.error("Modal not exists");
    }
  }

  close(id: string){
    const modal = this.modals.find(x => x.id == id);
    if(modal){
      modal.show = false;
    }else{
      console.error("Modal not exists");
    }
  }

}
