import { Chapter } from './chapter.interface';

export interface ComicRecommend {
  id: string;
  title: string;
  thumbnail: string;
  updatedAt: string;
  latestChapter: Chapter;
}
