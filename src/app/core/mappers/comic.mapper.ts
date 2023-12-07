import { ComicsResponse } from '../interfaces/api-response/comics-response.interface';
import { ComicDetail } from '../interfaces/base/comic-detail.interface';
import { ComicRecommend } from '../interfaces/base/comic-recommend.interface';
import { Comic } from '../interfaces/base/comic.interface';
import { mapJsonArrayToChapters, mapJsonToChapter } from './chapter.mappter';
import { mapJsonArrayToGenres } from './genre.mapper';
/**
 * Json Data
 * {
 *    id: string;
 *    title: string;
 *    thumbnail: string;
 *    updated_at: string;
 *    is_trending: boolean;
 *    genres: Genre[];
 *    short_description: string;
 *    other_names: string[];
 *    status: string;
 *    total_views: number;
 *    followers: number;
 *    last_chapter: Chapter;
 * }
 */

export function mapJsonToComic(jsonData: any): Comic {
  return {
    id: jsonData.id,
    title: jsonData.title,
    thumbnail: jsonData.thumbnail,
    updatedAt: jsonData.updated_at,
    isTrending: jsonData.is_trending,
    genres: mapJsonArrayToGenres(jsonData.genres), // Assuming genres is an array
    shortDescription: jsonData.short_description,
    otherNames: jsonData.other_names,
    status: jsonData.status,
    totalViews: jsonData.total_views,
    followers: jsonData.followers,
    lastChapter: mapJsonToChapter(jsonData.last_chapter),
  };
}
export function mapJsonArrayToComics(jsonArray: any[]): Comic[] {
  if (!jsonArray) return [];
  return jsonArray.map((jsonData) => mapJsonToComic(jsonData));
}

export function mapJsonToComicDetail(jsonData: any): ComicDetail {
  return {
    title: jsonData.title,
    thumbnail: jsonData.thumbnail,
    description: jsonData.description,
    authors: jsonData.authors,
    status: jsonData.status,
    genres: mapJsonArrayToGenres(jsonData.genres), // Assuming genres is an array
    totalViews: jsonData.total_views,
    followers: jsonData.followers,
    chapters: mapJsonArrayToChapters(jsonData.chapters), // Assuming chapters is an array
    id: jsonData.id,
    otherNames: jsonData.other_names,
  };
}

export function mapJsonToComicRecommend(jsonData: any): ComicRecommend {
  return {
    id: jsonData.id,
    title: jsonData.title,
    thumbnail: jsonData.thumbnail,
    updatedAt: jsonData.updated_at,
    latestChapter: mapJsonToChapter(jsonData.lastest_chapter),
  };
}
export function mapJsonArrayToComicRecommend(
  jsonArray: any[]
): ComicRecommend[] {
  if (!jsonArray) return [];
  return jsonArray.map((jsonData) => mapJsonToComicRecommend(jsonData));
}
export function mapJsonToComicsResponse(jsonData: any): ComicsResponse {
  return {
    comics: mapJsonArrayToComics(jsonData.comics),
    totalPages: jsonData.total_pages,
    currentPage: jsonData.current_page,
  };
}
