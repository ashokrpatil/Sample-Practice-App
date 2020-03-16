import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockCsv7Component } from './create-stock-csv7.component';

describe('CreateStockCsv7Component', () => {
  let component: CreateStockCsv7Component;
  let fixture: ComponentFixture<CreateStockCsv7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStockCsv7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStockCsv7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
