import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  NgxPaginationModule,
  PaginationControlsDirective,
} from 'ngx-pagination';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import { ScrollToDirective } from '../../directives/scroll-to/scroll-to.directive';
import { ArrowLeftIconComponent } from '../../icons/arrow-left-icon/arrow-left-icon.component';
import { ComicCardComponent } from '../comic-card/comic-card.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    ComicCardComponent,
    LoadingSpinnerComponent,
    ScrollToDirective,
    ArrowLeftIconComponent,
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnChanges {
  @Input() list: Comic[] = [];
  @Input() totalPages: number = 0;
  @Input() currentPage = 0;
  @Output() pageChanged = new EventEmitter<number>();
  isLoading = false;

  constructor(private router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['list']) {
      this.isLoading = false;
    }
  }
  onPageChanged(page: number): void {
    this.currentPage = page;
    this.isLoading = true;
    this.pageChanged.emit(page);
  }
  onNextPage(p: PaginationControlsDirective) {
    this.router.navigate([], {
      queryParams: { page: p.getCurrent() + 1 },
      queryParamsHandling: 'merge',
    });
    p.next();
  }
  onPrevPage(p: PaginationControlsDirective) {
    this.router.navigate([], {
      queryParams: { page: p.getCurrent() - 1 },
      queryParamsHandling: 'merge',
    });
    p.previous();
  }
}
