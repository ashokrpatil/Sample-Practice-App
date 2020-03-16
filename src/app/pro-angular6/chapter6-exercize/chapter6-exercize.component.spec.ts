import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter6ExercizeComponent } from './chapter6-exercize.component';

describe('Chapter6ExercizeComponent', () => {
  let component: Chapter6ExercizeComponent;
  let fixture: ComponentFixture<Chapter6ExercizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter6ExercizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter6ExercizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
