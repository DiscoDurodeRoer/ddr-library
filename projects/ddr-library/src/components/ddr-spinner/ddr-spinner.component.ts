import { DdrSpinnerService } from './ddr-spinner.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ddr-spinner',
  templateUrl: './ddr-spinner.component.html',
  styleUrls: ['./ddr-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdrSpinnerComponent implements OnInit {

  @Input() embedded: boolean = false;
  @Input() pathImg: string = 'resources/img/spinner.gif'

  constructor(
    public ddrSpinner: DdrSpinnerService
  ) { }

  ngOnInit() {
  }

}
