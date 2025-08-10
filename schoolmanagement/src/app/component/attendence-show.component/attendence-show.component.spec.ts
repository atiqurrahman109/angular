import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceShowComponent } from './attendence-show.component';

describe('AttendenceShowComponent', () => {
  let component: AttendenceShowComponent;
  let fixture: ComponentFixture<AttendenceShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttendenceShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendenceShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
