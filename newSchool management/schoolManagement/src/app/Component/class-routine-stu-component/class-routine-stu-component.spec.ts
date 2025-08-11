import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRoutineStuComponent } from './class-routine-stu-component';

describe('ClassRoutineStuComponent', () => {
  let component: ClassRoutineStuComponent;
  let fixture: ComponentFixture<ClassRoutineStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassRoutineStuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassRoutineStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
