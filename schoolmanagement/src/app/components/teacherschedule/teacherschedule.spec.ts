import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teacherschedule } from './teacherschedule';

describe('Teacherschedule', () => {
  let component: Teacherschedule;
  let fixture: ComponentFixture<Teacherschedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teacherschedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teacherschedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
