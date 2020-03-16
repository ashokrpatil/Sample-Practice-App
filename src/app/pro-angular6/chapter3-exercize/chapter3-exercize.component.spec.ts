import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter3ExercizeComponent } from './chapter3-exercize.component';

describe('Chapter3ExercizeComponent', () => {
  let component: Chapter3ExercizeComponent;
  let fixture: ComponentFixture<Chapter3ExercizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter3ExercizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter3ExercizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
