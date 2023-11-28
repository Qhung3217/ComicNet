import { Chapter } from './chapter.interface';

export interface ComicRecommend {
  id: string;
  title: string;
  thumbnail: string;
  updated_at: string;
  lastest_chapter: Chapter;
}
