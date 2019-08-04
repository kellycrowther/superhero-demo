import { Injectable } from '@angular/core';
import { MarvelProviderService } from 'src/providers/marvel-provider.service';
import { Observable } from 'rxjs';
import { ICharacterDataWrapper } from 'src/models/characters';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  public characterCache$: Observable<ICharacterDataWrapper>;
  public hasBeenCalled: boolean;

  constructor(public marvelProvider: MarvelProviderService) { }

  public getComics(limit?: number, offset?: number): Observable<ICharacterDataWrapper> {
    return this.marvelProvider.getComics(limit, offset);
  }
}
