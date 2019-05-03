import { Injectable } from '@angular/core';
import { MarvelProviderService } from 'src/providers/marvel-provider.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(public marvelProvider: MarvelProviderService) { }

  public getCharacters(): Observable<any> {
    return this.marvelProvider.getCharacters();
  }
}
