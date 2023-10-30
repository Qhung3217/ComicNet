import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIconComponent } from './search-icon.component';

describe('SearchIconComponent', () => {
  let component: SearchIconComponent;
  let fixture: ComponentFixture<SearchIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchIconComponent]
    });
    fixture = TestBed.createComponent(SearchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
