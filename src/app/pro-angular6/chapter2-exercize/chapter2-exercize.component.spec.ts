import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter2ExercizeComponent } from './chapter2-exercize.component';

describe('Chapter2ExercizeComponent', () => {
  let component: Chapter2ExercizeComponent;
  let fixture: ComponentFixture<Chapter2ExercizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter2ExercizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter2ExercizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
