import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamaddComponent } from './examadd.component';

describe('ExamaddComponent', () => {
  let component: ExamaddComponent;
  let fixture: ComponentFixture<ExamaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
