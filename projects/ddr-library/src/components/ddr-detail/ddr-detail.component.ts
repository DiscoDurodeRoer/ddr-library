import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output, ViewEncapsulation, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ddr-detail',
  templateUrl: './ddr-detail.component.html',
  styleUrls: ['./ddr-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ transform: 'translateX(100%)'}),
        animate('600ms ease-in', style({ transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class DdrDetailComponent implements OnInit {

  @Input() showOverlay: boolean = true;
  @Input() showTitle: boolean = true;
  @Input() clickOutsideEnabled: boolean = true;
  @Output() close: EventEmitter<boolean>;

  public showDetail: boolean;

  constructor() { 
    this.close = new EventEmitter<boolean>();
    this.showDetail = true;
  }

  ngOnInit() {
  }

  closeDetail(){
    this.showDetail = false;
    setTimeout(() => {
      this.close.emit(true);
    }, 600);
  }

}
