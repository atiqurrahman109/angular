import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewclassroutine } from './viewclassroutine';

describe('Viewclassroutine', () => {
  let component: Viewclassroutine;
  let fixture: ComponentFixture<Viewclassroutine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewclassroutine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewclassroutine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
