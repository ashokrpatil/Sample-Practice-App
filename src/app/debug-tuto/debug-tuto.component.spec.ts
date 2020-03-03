import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugTutoComponent } from './debug-tuto.component';

describe('DebugTutoComponent', () => {
  let component: DebugTutoComponent;
  let fixture: ComponentFixture<DebugTutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugTutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugTutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
