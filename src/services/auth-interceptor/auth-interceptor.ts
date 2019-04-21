import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpParams } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

const baseURL: string = 'http://gateway.marvel.com/v1/public';
const publicKey: string = '1ec21c276d190705b065aa2078ac4857';
const privateKey: string = '6a2c215e48619e5ee6836486b73716823057767f';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let changedRequest = request;
    const headerSettings: { [name: string]: string | string[]; } = {};
    for (const key of request.headers.keys()) {
      headerSettings[key] = request.headers.getAll(key);
    }
    headerSettings['Content-Type'] = 'application/json';
    const newHeader = new HttpHeaders(headerSettings);
    const timestamp = new Date().getTime().toString();
    const hash = this.getHash(timestamp);

    changedRequest = request.clone({
      headers: newHeader,
      url: baseURL + request.url + '?apikey=' + publicKey + '&hash=' + hash + '&ts=' + timestamp
    });
    return next.handle(changedRequest);
  }

  private getHash(timeStamp: string): string {
    const hashGenerator: Md5 = new Md5();
    hashGenerator.appendStr(timeStamp);
    hashGenerator.appendStr(privateKey);
    hashGenerator.appendStr(publicKey);
    const hash: string = hashGenerator.end().toString();
    return hash;
  }
}
