import { Injectable } from '@angular/core';
import { MarvelProviderService } from 'src/providers/marvel-provider.service';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public characterCache$: Observable<any>;
  public hasBeenCalled: boolean;

  constructor(public marvelProvider: MarvelProviderService) { }

  public getCharacters(): Observable<any> {
    // if (!this.hasBeenCalled) {
    //   this.hasBeenCalled = true;
    //   return this.marvelProvider.getCharacters().pipe(shareReplay(1));
    // } else {
    //   return this.characterCache$;
    // }
    return this.marvelProvider.getCharacters().pipe(shareReplay(1));
  }

  public getCharactersAsPromise(): Promise<any> {
    return this.marvelProvider.getCharactersAsPromise();
  }
}
