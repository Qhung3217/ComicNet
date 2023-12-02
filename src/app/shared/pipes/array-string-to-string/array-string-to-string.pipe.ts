import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayStringToString',
  standalone: true,
})
export class ArrayStringToStringPipe implements PipeTransform {
  transform(value: string[]): string {
    return value.join(' | ');
  }
}
