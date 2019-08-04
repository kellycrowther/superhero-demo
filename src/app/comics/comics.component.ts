import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics/comics.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  public comics$: Observable<any>;
  public searchControl: FormControl = new FormControl('');

  constructor(public comicsService: ComicsService) { }

  public ngOnInit() {
    this.comics$ = this.comicsService.getComics();
    this.searchComicsTitles();
  }

  public changePage(event: any): void {
    console.info('PAGE EVENT: ', event);
    this.comics$ = this.comicsService.getComics(event.pageSize, event.pageIndex);
  }

  public searchComicsTitles(): void {
    // Amazing Spider-Man is a good test value
    this.searchControl.valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged()
      ).subscribe(currentValue => {
      this.comics$ = this.comicsService.getComics(null, null, currentValue);
    });
  }

}
