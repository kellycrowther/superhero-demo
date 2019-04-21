import { TestBed } from '@angular/core/testing';

import { MarvelProviderService } from './marvel-provider.service';

describe('MarvelProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarvelProviderService = TestBed.get(MarvelProviderService);
    expect(service).toBeTruthy();
  });
});
