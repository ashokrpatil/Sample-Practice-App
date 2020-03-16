import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter5ExercizeComponent } from './chapter5-exercize.component';

describe('Chapter5ExercizeComponent', () => {
  let component: Chapter5ExercizeComponent;
  let fixture: ComponentFixture<Chapter5ExercizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter5ExercizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter5ExercizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
