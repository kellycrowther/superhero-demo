import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/services/characters/character.service';
import { MarvelProviderService } from 'src/providers/marvel-provider.service';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  public characters: any;

  constructor(public characterService: CharacterService, public data: MarvelProviderService) { }

  ngOnInit() {
    // this.characterService.getCharacters().subscribe((data) => {
    //   console.info('characters :', data.data.results);
    //   this.characters = data.data.results;
    // });
  }

}
