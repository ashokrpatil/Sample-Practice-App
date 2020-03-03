import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProAngular6Component } from './pro-angular6.component';

describe('ProAngular6Component', () => {
  let component: ProAngular6Component;
  let fixture: ComponentFixture<ProAngular6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProAngular6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProAngular6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
