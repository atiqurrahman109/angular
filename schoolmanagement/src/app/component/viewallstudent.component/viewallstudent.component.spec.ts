import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallstudentComponent } from './viewallstudent.component';

describe('ViewallstudentComponent', () => {
  let component: ViewallstudentComponent;
  let fixture: ComponentFixture<ViewallstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewallstudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
