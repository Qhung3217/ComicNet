import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ComicRecommend } from 'src/app/core/interfaces/base/comic-recommend.interface';
import { AppState } from 'src/app/core/reducers/app';

@Component({
  selector: 'app-section-recommend',
  templateUrl: './section-recommend.component.html',
  styleUrls: ['./section-recommend.component.scss'],
})
export class SectionRecommendComponent {
  recommendComics: ComicRecommend[] = [];
  constructor(private store: Store<AppState>) {
    this.store.select('comic').subscribe((comics) => {
      this.recommendComics = [...comics.recommendComics];
    });
  }
}
