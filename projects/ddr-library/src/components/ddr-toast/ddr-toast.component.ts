import { DdrToastService } from './ddr-toast.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'ddr-toast',
  templateUrl: './ddr-toast.component.html',
  styleUrls: ['./ddr-toast.component.scss'],
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
      transition('visible => void', animate('195ms ease-in'))
    ])
  ]
})
export class DdrToastComponent implements OnInit {

  @Input() timeout: number;

  constructor(
    public toastService: DdrToastService
  ) { }

  ngOnInit() {

    if(this.timeout){
      this.toastService.timeout = this.timeout;
    }

  }

  closeToast(toast){
    this.toastService.closeToast(toast);
  }

}
