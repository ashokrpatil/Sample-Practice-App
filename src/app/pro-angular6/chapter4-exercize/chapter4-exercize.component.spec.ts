import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter4ExercizeComponent } from './chapter4-exercize.component';

describe('Chapter4ExercizeComponent', () => {
  let component: Chapter4ExercizeComponent;
  let fixture: ComponentFixture<Chapter4ExercizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter4ExercizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter4ExercizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
