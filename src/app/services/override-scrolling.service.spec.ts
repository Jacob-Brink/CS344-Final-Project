import { TestBed } from '@angular/core/testing';

import { OverrideScrollingService } from './override-scrolling.service';

describe('OverrideScrollingService', () => {
  let service: OverrideScrollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverrideScrollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
