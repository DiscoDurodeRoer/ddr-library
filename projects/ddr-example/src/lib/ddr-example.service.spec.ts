import { TestBed } from '@angular/core/testing';

import { DdrExampleService } from './ddr-example.service';

describe('DdrExampleService', () => {
  let service: DdrExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdrExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
