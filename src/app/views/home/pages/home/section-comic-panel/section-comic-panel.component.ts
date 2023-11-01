import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-comic-panel',
  templateUrl: './section-comic-panel.component.html',
  styleUrls: ['./section-comic-panel.component.scss'],
})
export class SectionComicPanelComponent {
  @Input('title') title: string = 'Section Title';
}
