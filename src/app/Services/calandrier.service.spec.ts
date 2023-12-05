import { TestBed } from '@angular/core/testing';

import { CalandrierService } from './calandrier.service';

describe('CalandrierService', () => {
  let service: CalandrierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalandrierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
