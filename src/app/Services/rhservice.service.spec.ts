import { TestBed } from '@angular/core/testing';

import { RHServiceService } from './rhservice.service';

describe('RHServiceService', () => {
  let service: RHServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RHServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
