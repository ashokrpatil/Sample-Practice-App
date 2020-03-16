import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter8ExercizeComponent } from './chapter8-exercize.component';

describe('Chapter8ExercizeComponent', () => {
  let component: Chapter8ExercizeComponent;
  let fixture: ComponentFixture<Chapter8ExercizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter8ExercizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter8ExercizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
