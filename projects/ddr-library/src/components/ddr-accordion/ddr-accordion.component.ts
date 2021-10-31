import { DdrConstantsService } from './../../services/ddr-constants.service';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate,group } from '@angular/animations';

@Component({
  selector: 'ddr-accordion',
  templateUrl: './ddr-accordion.component.html',
  styleUrls: ['./ddr-accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideInOut' , [
      state('open', style({height: '*'})),
      state('close', style({height: 0})),
      transition('open <=> close', group(
        [
          animate('400ms')
        ]
      ))
    ])
  ]
})
export class DdrAccordionComponent implements AfterViewInit {

  @Input() title: string;
  @Input() open: boolean = false;

  @Output() clickOpen: EventEmitter<boolean>;

  @ViewChild("contentAccordion") contentAccordion: ElementRef;

  public state: string;

  constructor(
    public constants: DdrConstantsService
  ) { 
    this.state = this.constants.DdrAccordionConstants.CLOSE;
    this.clickOpen = new EventEmitter<boolean>();
  }

  ngAfterViewInit() {
    this.state = this.open ? this.constants.DdrAccordionConstants.OPEN : this.constants.DdrAccordionConstants.CLOSE;
    if(this.open){
      this.contentAccordion.nativeElement.style.overflow = 'hidden';
      setTimeout(() => {
        this.contentAccordion.nativeElement.style.overflow = 'inherit';
      }, 400);
    }
  }

  openClose(){

    if(this.state === this.constants.DdrAccordionConstants.OPEN){
      this.state = this.constants.DdrAccordionConstants.CLOSE;
    }else{
      this.state = this.constants.DdrAccordionConstants.OPEN;
    }

    this.contentAccordion.nativeElement.style.overflow = 'hidden';
    if(this.state == this.constants.DdrAccordionConstants.CLOSE){
      setTimeout(() => {
          this.open = !this.open;
          this.clickOpen.emit(this.open);
      }, 400);
    }else{
      this.open = !this.open;
      this.clickOpen.emit(this.open);
      setTimeout(() => {
        this.contentAccordion.nativeElement.style.overflow = 'inherit';
      }, 400);
    }

  }

}
