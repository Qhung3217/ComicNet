import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../constants/server-api';
import { ComicsResponse } from '../../interfaces/api-response/comics-response.interface';
import { GenreDetail } from '../../interfaces/base/genre-detail.interface';
import { ComicRecommend } from '../../interfaces/base/comic-recommend.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /* -------------------------------------------- */
  /*                  COMIC APIs                  */
  /* -------------------------------------------- */

  getComicsByGenreId(id: string, page: number, status: string) {
    const params = new HttpParams().set('page', page).set('status', status);
    return this.http.get<ComicsResponse>(BASE_URL + 'genres/' + id, {
      params: params,
    });
  }

  getRecommendComics() {
    return this.http.get<ComicRecommend[]>(BASE_URL + 'recommend-comics');
  }

  getPopularComics(page: number = 1) {
    const params = new HttpParams().set('page', page);
    return this.http.get<ComicsResponse>(BASE_URL + 'trending-comics', {
      params: params,
    });
  }

  getCompletedComics(page: number = 1) {
    const params = new HttpParams().set('page', page);
    return this.http.get<ComicsResponse>(BASE_URL + 'completed-comics', {
      params: params,
    });
  }

  getRecentUpdatedComics(page: number = 1) {
    const params = new HttpParams().set('page', page);
    return this.http.get<ComicsResponse>(BASE_URL + 'recent-update-comics', {
      params: params,
    });
  }

  getBoyComics(page: number = 1) {
    const params = new HttpParams().set('page', page);
    return this.http.get<ComicsResponse>(BASE_URL + 'boy-comics', {
      params: params,
    });
  }

  getGirlComics(page: number = 1) {
    const params = new HttpParams().set('page', page);
    return this.http.get<ComicsResponse>(BASE_URL + 'girl-comics', {
      params: params,
    });
  }
  /* --------------- ///////////// -------------- */

  /* -------------------------------------------- */
  /*                  GENRE APIs                  */
  /* -------------------------------------------- */

  getGenres() {
    return this.http.get<GenreDetail[]>(BASE_URL + 'genres');
  }

  /* --------------- ///////////// -------------- */
}
