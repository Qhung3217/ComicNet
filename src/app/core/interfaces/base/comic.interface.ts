import { Chapter } from './chapter.interface';
import { Genre } from './genre.interface';

export interface Comic {
  id: string;
  title: string;
  thumbnail: string;
  updatedAt: string;
  isTrending: boolean;
  genres: Genre[];
  shortDescription: string;
  otherNames: string[];
  status: string;
  totalViews: number;
  followers: number;
  lastChapter: Chapter;
}
