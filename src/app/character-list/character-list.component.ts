import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/services/characters/character.service';
import { MarvelProviderService } from 'src/providers/marvel-provider.service';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  public characters$: Observable<any>;
  public charactersAsPromise: Observable<any>;

  constructor(public characterService: CharacterService, public data: MarvelProviderService) { }

  ngOnInit() {
    this.characters$ = this.characterService.getCharacters();

  }

  public onSearch(nameStartsWith: string): void {
    this.characters$ = this.characterService.getCharacters(nameStartsWith).pipe(
      debounceTime(350)
    );
  }

  public onSearchAsPromise(nameStartsWith: string): void {
    this.characterService.getCharactersAsPromise(nameStartsWith).then((characters) => {
      this.charactersAsPromise = characters.data.result;
    });
  }

}
