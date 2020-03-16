import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter7ExercizeComponent } from './chapter7-exercize.component';

describe('Chapter7ExercizeComponent', () => {
  let component: Chapter7ExercizeComponent;
  let fixture: ComponentFixture<Chapter7ExercizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter7ExercizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter7ExercizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
