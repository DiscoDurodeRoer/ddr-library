import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ddr-block-list-data-item',
  templateUrl: './ddr-block-list-data-item.component.html',
  styleUrls: ['./ddr-block-list-data-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdrBlockListDataItemComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
