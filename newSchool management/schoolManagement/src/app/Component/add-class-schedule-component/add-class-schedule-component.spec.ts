import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassScheduleComponent } from './add-class-schedule-component';

describe('AddClassScheduleComponent', () => {
  let component: AddClassScheduleComponent;
  let fixture: ComponentFixture<AddClassScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddClassScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClassScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
