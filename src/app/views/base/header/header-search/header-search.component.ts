import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
})
export class HeaderSearchComponent implements OnChanges {
  @Input() comics: Comic[] = [];
  @Input() showViewMore: boolean = false;
  @Input() query: string = '';
  @Output() queryChange = new EventEmitter<string>();
  @Output() keyup = new EventEmitter();
  @Output() navigate = new EventEmitter();
  @Output() removeQuery = new EventEmitter();
  @ViewChild('input') inputElef!: ElementRef;
  showSearchSuggestion = false;
  showLoading = true;
  queryEncode: string = '';
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['comics']) {
      this.showLoading = false;
    }
    if (changes['query'] && changes['query'].currentValue !== '') {
      this.queryEncode = encodeURI(this.query);
    }
  }

  onInputChange(event: any) {
    this.showLoading = true;
    this.queryChange.emit(event);
  }
  onKeyup() {
    this.keyup.emit(true);
  }

  onClickSuggest(event: any) {
    event.preventDefault();
    setTimeout(() => {
      this.inputElef.nativeElement.blur();
      this.navigate.emit(true);
    }, 100);
  }
  onRemoveQuery() {
    this.removeQuery.emit(true);
  }
}
