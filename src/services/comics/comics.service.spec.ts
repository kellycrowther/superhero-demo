import { TestBed } from '@angular/core/testing';
import { ComicsService } from './comics.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ComicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient, HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: ComicsService = TestBed.get(ComicsService);
    expect(service).toBeTruthy();
  });
});
