import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendence } from './view-attendence';

describe('ViewAttendence', () => {
  let component: ViewAttendence;
  let fixture: ComponentFixture<ViewAttendence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAttendence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAttendence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
