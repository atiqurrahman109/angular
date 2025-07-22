import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplylistComponent } from './applylist.component';

describe('ApplylistComponent', () => {
  let component: ApplylistComponent;
  let fixture: ComponentFixture<ApplylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
