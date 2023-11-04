import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from 'src/app/core/interfaces/base/genre.interface';

@Pipe({
  name: 'genresToString',
  standalone: true,
})
export class GenresToStringPipe implements PipeTransform {
  transform(genres: Genre[]): string {
    let genresString = '';
    genresString = genres.map((gen) => gen.name).join(' | ');
    return genresString;
  }
}
