import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfeeeditComponent } from './studentfeeedit.component';

describe('StudentfeeeditComponent', () => {
  let component: StudentfeeeditComponent;
  let fixture: ComponentFixture<StudentfeeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentfeeeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentfeeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
