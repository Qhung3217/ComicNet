import { Component, Input } from '@angular/core';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';

@Component({
  selector: 'app-section-comic-panel',
  templateUrl: './section-comic-panel.component.html',
  styleUrls: ['./section-comic-panel.component.scss'],
})
export class SectionComicPanelComponent {
  @Input('title') title: string = 'Section Title';
  @Input('comics') comics: Comic[] = [];
}
