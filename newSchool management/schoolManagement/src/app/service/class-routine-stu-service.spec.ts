import { TestBed } from '@angular/core/testing';

import { ClassRoutineStuService } from './class-routine-stu-service';

describe('ClassRoutineStuService', () => {
  let service: ClassRoutineStuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassRoutineStuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
