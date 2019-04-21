import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MarvelProviderModule } from 'src/providers/marvel-provider.module';
import { CharacterServiceModule } from 'src/services/characters/character.service.module';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarvelProviderModule,
    CharacterServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
