import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/services/auth-interceptor/auth-interceptor';
import { MarvelProviderService } from './marvel-provider.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    MarvelProviderService
  ],
  schemas: []
})
export class MarvelProviderModule { }
