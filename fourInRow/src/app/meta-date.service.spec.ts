import { TestBed } from '@angular/core/testing';

import { MetaDateService } from './meta-date.service';

describe('MetaDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetaDateService = TestBed.get(MetaDateService);
    expect(service).toBeTruthy();
  });
});
