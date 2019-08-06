import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { HomeComponent } from './home/home.component';
import { FeaturedCharacterComponent } from './featured-character/featured-character.component';
import { ComicsComponent } from './comics/comics.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'character-detail', component: CharacterDetailComponent },
  { path: 'character-list', component: CharacterListComponent },
  { path: 'featured-character', component: FeaturedCharacterComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
