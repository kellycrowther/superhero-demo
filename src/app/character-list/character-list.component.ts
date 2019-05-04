import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/services/characters/character.service';
import { MarvelProviderService } from 'src/providers/marvel-provider.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  public characters$: Observable<any>;
  public charactersAsPromise: Array<any>;
  public search = new FormControl();

  constructor(public characterService: CharacterService, public data: MarvelProviderService) { }

  ngOnInit() {
    this.characters$ = this.search.valueChanges.pipe(
      startWith(''), // initialize the search and emit value from Subject
      debounceTime(300), // wait 300ms before continuing
      distinctUntilChanged(), // give me distinct values
      switchMap((term: string) => this.characterService.getCharacters(term)) // switch the observable and get my characters
    );
    this.onSearchAsPromise();
  }

  public onSearchAsPromise(nameStartsWith?: string): void {
    this.characterService.getCharactersAsPromise(nameStartsWith).then((characters) => {
      this.charactersAsPromise = characters.data.results;
    });
  }

}
