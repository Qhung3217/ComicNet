import { Component, Input } from '@angular/core';
import { ComicRecommend } from 'src/app/core/interfaces/base/comic-recommend.interface';

@Component({
  selector: 'app-section-recommend',
  templateUrl: './section-recommend.component.html',
  styleUrls: ['./section-recommend.component.scss'],
})
export class SectionRecommendComponent {
  @Input('recommendComics') recommendComics: ComicRecommend[] = [];
}
