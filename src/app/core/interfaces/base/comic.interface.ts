import { Chapter } from './chapter.interface';
import { Genre } from './genre.interface';

export interface Comic {
  id: string;
  title: string;
  thumbnail: string;
  updated_at: string;
  is_trending: boolean;
  genres: Genre[];
  short_description: string;
  other_names: string[];
  status: string;
  total_views: number;
  followers: number;
  last_chapter: Chapter;
}
