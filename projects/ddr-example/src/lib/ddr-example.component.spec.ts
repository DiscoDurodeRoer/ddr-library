import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdrExampleComponent } from './ddr-example.component';

describe('DdrExampleComponent', () => {
  let component: DdrExampleComponent;
  let fixture: ComponentFixture<DdrExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DdrExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DdrExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
