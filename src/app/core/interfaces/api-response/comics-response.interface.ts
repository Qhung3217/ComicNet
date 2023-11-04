import { Comic } from '../base/comic.interface';

export interface ComicsResponse {
  comics: Comic[];
  total_pages: number;
  current_page: number;
}
