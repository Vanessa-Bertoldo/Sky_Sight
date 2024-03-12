import { TestBed } from '@angular/core/testing';

import { SkysightService } from './skysight.service';

describe('SkysightService', () => {
  let service: SkysightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkysightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
