import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics/comics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  public comics$: Observable<any>;

  constructor(public comicsService: ComicsService) { }

  public ngOnInit() {
    this.comics$ = this.comicsService.getComics();
  }

  public changePage(event: any) {
    console.info('PAGE EVENT: ', event);
    this.comics$ = this.comicsService.getComics(event.pageSize, event.pageIndex);
  }

}
