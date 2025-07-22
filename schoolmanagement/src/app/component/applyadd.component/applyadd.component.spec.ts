import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyaddComponent } from './applyadd.component';

describe('ApplyaddComponent', () => {
  let component: ApplyaddComponent;
  let fixture: ComponentFixture<ApplyaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
