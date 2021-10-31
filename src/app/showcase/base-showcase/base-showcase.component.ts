import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-showcase',
  templateUrl: './base-showcase.component.html',
  styleUrls: ['./base-showcase.component.scss']
})
export class BaseShowcaseComponent implements OnInit {

  @Input() showExamples: boolean = true;
  @Input() showCode: boolean = true;
  @Input() showInputs: boolean = true;
  @Input() showOutputs: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
