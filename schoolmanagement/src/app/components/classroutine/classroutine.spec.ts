import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classroutine } from './classroutine';

describe('Classroutine', () => {
  let component: Classroutine;
  let fixture: ComponentFixture<Classroutine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Classroutine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Classroutine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
