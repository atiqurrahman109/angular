import { TestBed } from '@angular/core/testing';

import { TransportAssignmentService } from './transport-assignment.service';

describe('TransportAssignmentService', () => {
  let service: TransportAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
