import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfeeaddComponent } from './studentfeeadd.component';

describe('StudentfeeaddComponent', () => {
  let component: StudentfeeaddComponent;
  let fixture: ComponentFixture<StudentfeeaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentfeeaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentfeeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
