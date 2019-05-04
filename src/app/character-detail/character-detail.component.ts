import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/services/characters/character.service';

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  constructor(public characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters().subscribe((data) => {
      console.info('INIT FIRED: ', data);
    });
  }

}
