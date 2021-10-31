import { DdrResolutionService } from './ddr-resolution.service';
import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[ddrResolution]'
})
export class DdrResolutionDirective implements OnInit {

  constructor(
    private resolution: DdrResolutionService
  ) { }

  ngOnInit(){
    this.sendSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.sendSize(event.currentTarget.innerWidth);
  }

  sendSize(width: number){
    this.resolution.setSize(width);
  }

}
