import { Chapter } from './chapter.interface';
import { Genre } from './genre.interface';

export interface ComicDetail {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  authors: string;
  status: string;
  genres: Genre[];
  totalViews: number;
  followers: number;
  chapters: Chapter[];
  otherNames: string[];
}
