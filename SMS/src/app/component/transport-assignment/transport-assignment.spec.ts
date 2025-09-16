import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportAssignment } from './transport-assignment';

describe('TransportAssignment', () => {
  let component: TransportAssignment;
  let fixture: ComponentFixture<TransportAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
