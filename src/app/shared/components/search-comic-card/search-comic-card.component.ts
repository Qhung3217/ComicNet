import { ImageLoadFailedDirective } from 'src/app/shared/directives/image-load-failed/image-load-failed.directive';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-comic-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    ImageLoadFailedDirective,
  ],
  templateUrl: './search-comic-card.component.html',
  styleUrls: ['./search-comic-card.component.scss'],
})
export class SearchComicCardComponent implements OnInit {
  @Input() brief = false;
  @Input() comic!: Comic;
  @Input() lazy: boolean = true;
  genreString: string = '';

  ngOnInit(): void {
    const genres = [...this.comic.genres];

    this.genreString = genres.map((genre) => genre.name).join(', ');
  }
}
