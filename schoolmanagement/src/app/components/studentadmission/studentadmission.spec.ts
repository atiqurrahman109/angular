import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentadmission } from './studentadmission';

describe('Studentadmission', () => {
  let component: Studentadmission;
  let fixture: ComponentFixture<Studentadmission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Studentadmission]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentadmission);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
