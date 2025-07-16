import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallstudentdetailsComponent } from './viewallstudentdetails.component';

describe('ViewallstudentdetailsComponent', () => {
  let component: ViewallstudentdetailsComponent;
  let fixture: ComponentFixture<ViewallstudentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewallstudentdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallstudentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
