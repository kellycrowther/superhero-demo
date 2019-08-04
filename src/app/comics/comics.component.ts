import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics/comics.service';

@Component({
  selector: 'comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(public comicsService: ComicsService) { }

  public ngOnInit() {
    this.comicsService.getCharacters().subscribe(data => {
      console.info('DATA: ', data);
    });
  }

}
