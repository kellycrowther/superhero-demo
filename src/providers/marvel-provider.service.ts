import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ICharacterDataWrapper } from 'src/models/characters';

@Injectable({
  providedIn: 'root'
})
export class MarvelProviderService {

  constructor(public http: HttpClient) { }

  public getCharacters(nameStartsWith?: string): Observable<ICharacterDataWrapper> {
    let params = new HttpParams();
    if (nameStartsWith) {
      params = params.append('nameStartsWith', nameStartsWith);
    }
    return this.http.get(`/characters`, { params: params })
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

  public getCharactersAsPromise(nameStartsWith?: string): Promise<ICharacterDataWrapper> {
    let params = new HttpParams();
    if (nameStartsWith) {
      params = params.append('nameStartsWith', nameStartsWith);
    }
    return this.http.get(`/characters`, { params: params })
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

  public getComics(limit?: number, offset?: number): Observable<any> {
    let params = new HttpParams();
    if (limit) {
      params = params.append('limit', limit.toString());
    }
    if (offset) {
      params = params.append('offset', offset.toString());
    }
    return this.http.get(`/comics`, { params: params }).pipe(
      map((data: any) => {
        if (!data) {
          console.warn('MarvelProviderService->getComics() Invalid Data');
          throwError('MarvelProviderService->getComics() Invalid Data');
        }
        return data.data;
      }),
      catchError(e => {
        console.error('MarvelProviderService->getCharactersAsPromise() Error', e);
        return throwError(e || 'Error getComics()');
      })
    );
  }
}
