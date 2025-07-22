import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyeditComponent } from './applyedit.component';

describe('ApplyeditComponent', () => {
  let component: ApplyeditComponent;
  let fixture: ComponentFixture<ApplyeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
