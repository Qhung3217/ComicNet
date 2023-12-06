import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DEFAULT_IMAGE_URL } from 'src/app/core/constants/image';
import { Chapter } from 'src/app/core/interfaces/base/chapter.interface';
import { ComicDetail } from 'src/app/core/interfaces/base/comic-detail.interface';
import { AppState } from 'src/app/core/reducers/app';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnDestroy, OnInit {
  isShowMore: boolean = false;
  comic: ComicDetail | null = null;
  chapterGroups: string[] = [];
  chapterGroupIndexSelected: number = 0;
  chapters: Chapter[] = [];
  subscription?: Subscription;
  readonly DEFAULT_IMAGE = DEFAULT_IMAGE_URL;
  readonly CHAPTER_INDEX_SPACING: number = 50;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.subscription = this.store
      .select('comic', 'comicDetail')
      .subscribe((comicDetail) => {
        if (comicDetail) {
          this.initialValue();
          this.comic = { ...comicDetail };
          this.calcChapterGroupQuantity();
          this.chapters = [...comicDetail.chapters].reverse();
        } else this.showError();
      });
  }
  handleChapterGroupClick(index: number) {
    this.chapterGroupIndexSelected = index;
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  renderChapters() {
    const end =
      (this.chapterGroupIndexSelected + 1) * this.CHAPTER_INDEX_SPACING;
    const start = end - this.CHAPTER_INDEX_SPACING;
    // console.log(this.chapterGroupIndexSelected, start, end);
    return this.chapters.slice(start, end);
  }
  private initialValue() {
    this.chapterGroups = [];
    this.chapterGroupIndexSelected = 0;
    this.isShowMore = false;
  }
  private calcChapterGroupQuantity() {
    const chapterGroupQuantity = Math.ceil(
      this.comic!.chapters.length / this.CHAPTER_INDEX_SPACING
    );
    for (let i = 0; i < chapterGroupQuantity; i++) {
      /**
       * The purpose of adding 1:
       * Ensures that chapter indices start from 1 instead of 0, providing a more intuitive representation.
       *
       * Use case example:
       * startIndex = 2 * 5 + 1; // Result: 11
       * => Render chapter will start from chapter 10 cause array start from 0
       */
      const startIndex = i * this.CHAPTER_INDEX_SPACING + 1;

      /**
       * The purpose of adding CHAPTER_INDEX_SPACING:
       * Ensures that quantity of chapters alway lower or equal to CHAPTER_INDEX_SPACING
       *
       * Use case example:
       * endIndex = 2 * 5 + 5; // Result: 16
       * => Will have 5 chapters are rendered // 16 - 11 = 5
       * => Render chapter will stop at chapter 15 cause array start from 0
       */
      const endIndex =
        i * this.CHAPTER_INDEX_SPACING + this.CHAPTER_INDEX_SPACING;
      this.chapterGroups.push(`${startIndex} - ${endIndex}`);
    }
  }

  private showError() {
    alert('Something went wrong! Please try again');
    // this.router.navigate(['/']);
  }
}
