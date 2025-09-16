import { TestBed } from '@angular/core/testing';

import { FeeserviceService } from './feeservice.service';

describe('FeeserviceService', () => {
  let service: FeeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
