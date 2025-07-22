import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceeditComponent } from './attendenceedit.component';

describe('AttendenceeditComponent', () => {
  let component: AttendenceeditComponent;
  let fixture: ComponentFixture<AttendenceeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttendenceeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendenceeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
