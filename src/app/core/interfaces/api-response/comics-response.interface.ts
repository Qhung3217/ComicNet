import { Comic } from '../base/comic.interface';

export interface ComicsResponse {
  comics: Comic[];
  totalPages: number;
  currentPage: number;
}
