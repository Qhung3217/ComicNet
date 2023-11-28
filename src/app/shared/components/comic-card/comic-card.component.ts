import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EyeIconComponent } from '../../icons/eye-icon/eye-icon.component';
import { HeartIconComponent } from '../../icons/heart-icon/heart-icon.component';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import { GenresToStringPipe } from '../../pipes/genres-to-string/genres-to-string.pipe';
import { DEFAULT_IMAGE_URL } from 'src/app/core/constants/image';
import { ComicRecommend } from 'src/app/core/interfaces/base/comic-recommend.interface';

@Component({
  selector: 'app-comic-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,

    GenresToStringPipe,

    EyeIconComponent,
    HeartIconComponent,
  ],
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss'],
})
export class ComicCardComponent implements OnInit {
  @Input() category: 'comic' | 'comic-recommend' = 'comic';
  @Input() cardTag: string = '';
  @Input() comic?: any;
  @Input() lazy: boolean = true;
  thumbnail: string = '';
  ngOnInit(): void {
    this.thumbnail = this.comic ? this.comic.thumbnail : DEFAULT_IMAGE_URL;
  }
  loadDefaultImage() {
    this.thumbnail = DEFAULT_IMAGE_URL;
  }
  isUp() {
    if (!this.comic) return false;
    const regex = /(\d+)\s+(\w+)/i;
    // 1 giờ trước => ['1 giờ','1','giờ']
    const updatedAt = regex.exec(this.comic.updated_at);
    if (!updatedAt) return false;
    switch (updatedAt[2]) {
      case 'giờ':
        return true;
      case 'ngày':
        if (+updatedAt[1] <= 3) return true;
        else return false;
      default:
        return false;
    }
  }
}
