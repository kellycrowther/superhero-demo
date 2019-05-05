import { TestBed } from '@angular/core/testing';
import { CharacterService } from './character.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CharacterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient, HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: CharacterService = TestBed.get(CharacterService);
    expect(service).toBeTruthy();
  });
});
