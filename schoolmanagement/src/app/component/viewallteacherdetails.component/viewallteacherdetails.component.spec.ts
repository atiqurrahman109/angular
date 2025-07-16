import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallteacherdetailsComponent } from './viewallteacherdetails.component';

describe('ViewallteacherdetailsComponent', () => {
  let component: ViewallteacherdetailsComponent;
  let fixture: ComponentFixture<ViewallteacherdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewallteacherdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallteacherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
