import { DdrModalService } from './ddr-modal.service';
import { DdrConstantsService } from './../../services/ddr-constants.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ddr-modal',
  templateUrl: './ddr-modal.component.html',
  styleUrls: ['./ddr-modal.component.scss']
})
export class DdrModalComponent implements OnInit {

  @Input() id: string;
  @Input() type: string = this.constants.DdrModalTypeConstants.INFO;
  @Input() labelConfirm: string;
  @Input() labelClose: string;
  @Input() forceClose: boolean = false;

  @Output() close: EventEmitter<MouseEvent>;
  @Output() accept: EventEmitter<MouseEvent>;

  public show: boolean;

  constructor(
    public constants: DdrConstantsService,
    private ddrModal: DdrModalService
  ) { 
    this.close = new EventEmitter<MouseEvent>();
    this.accept = new EventEmitter<MouseEvent>();
    this.show = false;
  }

  ngOnInit() {
    if(!this.id){
      console.error("Modal must have id");
      return;
    }
    this.ddrModal.add(this);
  }

  onConfirm($event: MouseEvent){
    this.accept.emit($event);
    this.ddrModal.close(this.id);
  }

  onClose($event: MouseEvent){
    this.close.emit($event);
    this.ddrModal.close(this.id);
  }

  onclickOutside($event: MouseEvent){
    this.close.emit($event);
    this.ddrModal.close(this.id);
  }

}
