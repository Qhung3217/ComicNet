import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/reducers/app';
import { FetchRecommendComics } from 'src/app/core/reducers/home/comic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(new FetchRecommendComics());
  }
}
