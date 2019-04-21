import { Injectable } from '@angular/core';
import { MarvelProviderService } from 'src/providers/marvel-provider.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(public marvelProvider: MarvelProviderService) { }

  public getCharacters(): any {
    return this.marvelProvider.getCharacters();
  }
}
