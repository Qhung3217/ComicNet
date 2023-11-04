import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicCardComponent } from '../comic-card/comic-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import { ArrowLeftIconComponent } from '../../icons/arrow-left-icon/arrow-left-icon.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    ComicCardComponent,
    NgxPaginationModule,
    ArrowLeftIconComponent,
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() list: Comic[] = [];
  @Input() totalPages: number = 0;
  @Input() currentPage = 0;
  @Output() pageChanged = new EventEmitter<number>();

  onPageChanged(page: number): void {
    this.currentPage = page;
    this.pageChanged.emit(page);
  }
}
