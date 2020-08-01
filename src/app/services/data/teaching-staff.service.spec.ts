import { TestBed } from '@angular/core/testing';

import { TeachingStaffService } from './teaching-staff.service';

describe('TeachingStaffService', () => {
  let service: TeachingStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachingStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
