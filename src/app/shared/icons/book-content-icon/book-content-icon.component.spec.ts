import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentIconComponent } from './book-content-icon.component';

describe('BookContentIconComponent', () => {
  let component: BookContentIconComponent;
  let fixture: ComponentFixture<BookContentIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BookContentIconComponent]
    });
    fixture = TestBed.createComponent(BookContentIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
