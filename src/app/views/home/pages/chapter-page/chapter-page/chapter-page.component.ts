import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SingleChapterResponse } from 'src/app/core/interfaces/api-response/single-chapter-response.interface';
import { Chapter } from 'src/app/core/interfaces/base/chapter.interface';
import { ChapterRequest } from 'src/app/core/interfaces/chapter-request.interface';
import { AppState } from 'src/app/core/reducers/app';
import { FetchChapter } from 'src/app/core/reducers/home/comic';

@Component({
  selector: 'app-chapter-page',
  templateUrl: './chapter-page.component.html',
  styleUrls: ['./chapter-page.component.scss'],
})
export class ChapterPageComponent implements OnInit, OnDestroy {
  chapterResponse: SingleChapterResponse | null = null;
  chapterRequest: ChapterRequest = {} as ChapterRequest;
  chapterRender: Chapter[] = [];
  nextChapterId: number | null = null;
  prevChapterId: number | null = null;
  searchChapterNumber: number | null = null;
  showChaptersModal = false;
  showLoadingSpinner = true;
  searchTimeout: any;
  subscription: Subscription[] = [];
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setChapterRequest();
    this.setChapterResponse();
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub?.unsubscribe());
  }

  onSearchChapterNumberChanged() {
    if (this.searchTimeout) clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      if (this.searchChapterNumber != null) {
        const retrieveChapterNumberRegex = /(\d+)(\.\d+)?/;
        const matchChapters = this.chapterResponse?.chapters.filter(
          (chapter) => {
            const chapterNumber = retrieveChapterNumberRegex.exec(chapter.name);

            if (!chapterNumber) return false;
            else return +chapterNumber[1] === this.searchChapterNumber;
          }
        );
        this.chapterRender = matchChapters ? matchChapters : [];
      } else this.chapterRender = [...this.chapterResponse!.chapters];
    }, 200);
  }

  private setChapterRequest() {
    this.subscription.push(
      this.route.params.subscribe((params) => {
        const chapterId = +params['chapter-id'];
        const comicId = params['comic-slug'];

        if (
          chapterId !== this.chapterRequest.chapterId ||
          comicId !== this.chapterRequest.comicId
        ) {
          this.showLoadingSpinner = true;
          this.nextChapterId = null;
          this.prevChapterId = null;
          this.chapterRequest = {
            chapterId,
            comicId,
          };
          this.store.dispatch(new FetchChapter(this.chapterRequest));
        }
      })
    );
  }
  private setChapterResponse() {
    this.subscription.push(
      this.store.select('comic', 'chapterResponse').subscribe((response) => {
        if (response) {
          this.setNextAndPrevChapter([...response.chapters]);
          this.chapterRender = [...response.chapters];
          this.chapterResponse = { ...response };
          this.showLoadingSpinner = false;
          if (
            this.chapterResponse.images.length === 0 &&
            this.chapterResponse.comicName === ''
          ) {
            if (this.chapterResponse.chapters.length > 0)
              this.chapterResponse.chapterName = 'Chương lỗi!';
            alert('Có lỗi xảy ra! Vui lòng thử lại sau');
          }
        }
      })
    );
  }
  private setNextAndPrevChapter(chapters: Chapter[]) {
    const currentChapterIndex = chapters.findIndex(
      (chapter) => chapter.id == this.chapterRequest.chapterId
    );

    /**
     * Chapter number: Newest -> Oldest
     * Array index: 0 -> N
     */
    if (currentChapterIndex >= 0) {
      const indexChapter = currentChapterIndex - 1;
      if (indexChapter >= 0) this.nextChapterId = chapters[indexChapter].id;
    }
    if (currentChapterIndex >= 0) {
      const indexChapter = currentChapterIndex + 1;
      if (indexChapter < chapters.length)
        this.prevChapterId = chapters[indexChapter].id;
    }
  }
}
