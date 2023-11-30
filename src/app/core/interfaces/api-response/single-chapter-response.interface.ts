import { ChapterImage } from '../base/chapter-image.interface';
import { Chapter } from '../base/chapter.interface';

export interface SingleChapterResponse {
  images: ChapterImage[];
  chapters: Chapter[];
  chapterName?: string;
  comicName: string;
}
