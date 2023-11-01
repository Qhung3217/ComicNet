import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EyeIconComponent } from '../../icons/eye-icon/eye-icon.component';
import { HeartIconComponent } from '../../icons/heart-icon/heart-icon.component';

@Component({
  selector: 'app-comic-card',
  standalone: true,
  imports: [CommonModule, RouterModule, EyeIconComponent, HeartIconComponent],
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss'],
})
export class ComicCardComponent {
  @Input() isSimpleCard: boolean = false;
  @Input() cardTag: string = '';
}
