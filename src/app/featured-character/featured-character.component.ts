import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/services/characters/character.service';
import { MarvelProviderService } from 'src/providers/marvel-provider.service';
import { shareReplay, first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'featured-character',
  templateUrl: './featured-character.component.html',
  styleUrls: ['./featured-character.component.css']
})
export class FeaturedCharacterComponent implements OnInit {

  public character$: Observable<any>;

  constructor(public characterService: CharacterService, public data: MarvelProviderService) { }

  ngOnInit() {
    this.character$ = this.characterService.getCharacters().pipe(shareReplay(4));
    // this.character$.subscribe((data) => {
    //   console.info('INIT FIRED: ', data);
    // });
  }

  public getCharactersButton(): void {
    this.character$.subscribe((data) => {
      console.info('BUTTON FIRED: ', data);
    });
  }

}
