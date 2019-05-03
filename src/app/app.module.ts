import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MarvelProviderModule } from 'src/providers/marvel-provider.module';
import { CharacterServiceModule } from 'src/services/characters/character.service.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FeaturedCharacterComponent } from './featured-character/featured-character.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    FeaturedCharacterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MarvelProviderModule,
    CharacterServiceModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
