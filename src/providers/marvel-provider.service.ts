import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelProviderService {

  constructor(public http: HttpClient) { }

  public getCharacters(): Observable<any> {
    return this.http.get('/characters')
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
}
