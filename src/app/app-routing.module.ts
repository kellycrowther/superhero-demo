import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'character-detail', component: CharacterDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
