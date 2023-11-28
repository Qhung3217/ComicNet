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

  /* --------------- ///////////// -------------- */

  /* -------------------------------------------- */
  /*                  GENRE APIs                  */
  /* -------------------------------------------- */

  getGenres() {
    return this.http.get<GenreDetail[]>(BASE_URL + 'genres');
  }

  /* --------------- ///////////// -------------- */
}
