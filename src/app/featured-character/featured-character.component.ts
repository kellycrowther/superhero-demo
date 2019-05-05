import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/services/characters/character.service';
import { MarvelProviderService } from 'src/providers/marvel-provider.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'featured-character',
  templateUrl: './featured-character.component.html',
  styleUrls: ['./featured-character.component.css']
})
export class FeaturedCharacterComponent implements OnInit {

  public character$: Observable<any>;
  public showFeaturedCharacter: boolean = false;

  constructor(public characterService: CharacterService, public data: MarvelProviderService) { }

  /* Eager vs Lazy Fetching */
  ngOnInit() {
    this.character$ = this.characterService.getCharacters();
    this.characterService.getCharactersAsPromise().then((data) => {
      console.info('FeaturedCharacterComponent->ngOnInit->asPromise: ', data);
    });
  }

  public getCharactersButton(): void {
    this.character$.subscribe((data) => {
      console.info('FeaturedCharacterComponent->getCharactersButton()', data);
    });
  }

  public getCharactersButtonAsPromise(): void {
    this.characterService.getCharactersAsPromise().then((data) => {
      console.info('FeaturedCharacterComponent->getCharactersButtonAsPromise()', data);
    });
  }

  public toggleFeaturedCharacter(): void {
    this.showFeaturedCharacter = !this.showFeaturedCharacter;
  }

}
