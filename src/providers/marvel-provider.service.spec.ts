import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MarvelProviderService } from './marvel-provider.service';

describe('MarvelProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient, HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: MarvelProviderService = TestBed.get(MarvelProviderService);
    expect(service).toBeTruthy();
  });
});
