import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClassForm } from './school-class-form';

describe('SchoolClassForm', () => {
  let component: SchoolClassForm;
  let fixture: ComponentFixture<SchoolClassForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchoolClassForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolClassForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
