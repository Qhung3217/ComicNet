import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComicCardComponent } from './search-comic-card.component';

describe('SearchComicCardComponent', () => {
  let component: SearchComicCardComponent;
  let fixture: ComponentFixture<SearchComicCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchComicCardComponent]
    });
    fixture = TestBed.createComponent(SearchComicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
