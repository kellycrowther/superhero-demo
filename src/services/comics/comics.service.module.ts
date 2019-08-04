import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsService } from './comics.service';
import { MarvelProviderModule } from 'src/providers/marvel-provider.module';

@NgModule({
  imports: [CommonModule],
  providers: [
    ComicsService,
    MarvelProviderModule
  ],
  schemas: []
})
export class ComicsServiceModule { }
