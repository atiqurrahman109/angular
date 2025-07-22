import { TestBed } from '@angular/core/testing';

import { StudentfeeService } from './studentfee.service';

describe('StudentfeeService', () => {
  let service: StudentfeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentfeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
