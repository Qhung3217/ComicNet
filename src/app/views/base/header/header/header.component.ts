import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import { SearchRequest } from 'src/app/core/interfaces/search-request.interface';
import { AppState } from 'src/app/core/reducers/app';
import {
  FetchSearchComic,
  ResetSearchComic,
} from 'src/app/core/reducers/home/comic';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, OnInit {
  @ViewChild('menu') menuMobile!: ElementRef;
  query: string = '';
  comics: Comic[] = [];
  totalPages: number = 1;
  subscriptions: Subscription[] = [];
  searchTimeout: any;
  constructor(private store: Store<AppState>) {}
  turnOffMenuMobile() {
    setTimeout(() => this.menuMobile.nativeElement.click(), 50);
  }
  ngOnInit(): void {
    this.subscriptions.push(
      this.store
        .select('comic', 'searchComics', 'comics')
        .subscribe((comics) => {
          this.comics = [...comics];
        })
    );
    this.subscriptions.push(
      this.store
        .select('comic', 'searchComics', 'totalPages')
        .subscribe((totalPages) => {
          this.totalPages = totalPages;
        })
    );
  }
  ngOnDestroy(): void {
    clearTimeout(this.searchTimeout);
    this.subscriptions.forEach((sub) => sub?.unsubscribe());
    this.store.dispatch(new ResetSearchComic());
  }
  onSearch() {
    if (this.searchTimeout) clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      if (this.query == '') {
        this.store.dispatch(new ResetSearchComic());
        return;
      }
      const request: SearchRequest = {
        query: '' + this.query,
        page: 1,
      };
      this.store.dispatch(new FetchSearchComic(request));
    }, 200);
  }
  onRemoveQuery() {
    this.query = '';

    this.store.dispatch(new ResetSearchComic());
  }
}
