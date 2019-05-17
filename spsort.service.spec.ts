import { TestBed } from '@angular/core/testing';

import { SpsortService } from './spsort.service';

describe('SpsortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpsortService = TestBed.get(SpsortService);
    expect(service).toBeTruthy();
  });
});
