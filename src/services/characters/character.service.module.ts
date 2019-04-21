import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from './character.service';
import { MarvelProviderModule } from 'src/providers/marvel-provider.module';

@NgModule({
  imports: [CommonModule],
  providers: [
    CharacterService,
    MarvelProviderModule
  ],
  schemas: []
})
export class CharacterServiceModule { }
