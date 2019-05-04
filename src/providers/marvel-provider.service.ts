import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelProviderService {

  constructor(public http: HttpClient) { }

  public getCharacters(nameStartsWith?: string): Observable<any> {
    const startsWith = nameStartsWith !== undefined ? 'nameStartsWith=' + nameStartsWith : '';
    return this.http.get(`/characters${startsWith}`)
      .pipe(
        map((data) => {
          if (!data) {
            console.warn('MarvelProviderService->getCharacters() Invalid Data');
            throwError('MarvelProviderService->getCharacters() Invalid Data');
          }
          return data;
        }),
        catchError(e => {
          console.error('MarvelProviderService->getCharacters() Error', e);
          return throwError(e || 'Error getCharacters()');
        }));
  }

  public getCharactersAsPromise(nameStartsWith?: string): Promise<any> {
    const startsWith = nameStartsWith !== undefined ? 'nameStartsWith=' + nameStartsWith : '';
    return this.http.get(`/characters${startsWith}`)
      .pipe(
        map((data) => {
          if (!data) {
            console.warn('MarvelProviderService->getCharactersAsPromise() Invalid Data');
            throwError('MarvelProviderService->getCharactersAsPromise() Invalid Data');
          }
          return data;
        }),
        catchError(e => {
          console.error('MarvelProviderService->getCharactersAsPromise() Error', e);
          return throwError(e || 'Error getCharactersAsPromise()');
        }))
        .toPromise();
  }
}
