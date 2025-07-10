import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallteacherComponent } from './viewallteacher.component';

describe('ViewallteacherComponent', () => {
  let component: ViewallteacherComponent;
  let fixture: ComponentFixture<ViewallteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewallteacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
