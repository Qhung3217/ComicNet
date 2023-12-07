import { GenreDetail } from '../interfaces/base/genre-detail.interface';
import { Genre } from '../interfaces/base/genre.interface';

export function mapJsonToGenre(jsonData: any): Genre {
  return {
    id: jsonData.id,
    name: jsonData.name,
  };
}
export function mapJsonArrayToGenres(jsonArray: any[]): Genre[] {
  if (!jsonArray) return [];
  return jsonArray.map((jsonData) => mapJsonToGenre(jsonData));
}
export function mapJsonToGenreDetail(jsonData: any): GenreDetail {
  return {
    id: jsonData.id,
    name: jsonData.name,
    description: jsonData.description,
  };
}
export function mapJsonArrayToGenreDetails(jsonArray: any[]): GenreDetail[] {
  if (!jsonArray) return [];
  return jsonArray.map((jsonData) => mapJsonToGenreDetail(jsonData));
}
