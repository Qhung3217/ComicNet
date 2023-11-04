import { Chapter } from './chapter.interface';
import { Genre } from './genre.interface';

export interface ComicDetail {
  title: string;
  thumbnail: string;
  description: string;
  authors: string;
  status: string;
  genres: Genre[];
  total_views: number;
  followers: number;
  chapters: Chapter[];
  id: string;
  other_names: string[];
}
