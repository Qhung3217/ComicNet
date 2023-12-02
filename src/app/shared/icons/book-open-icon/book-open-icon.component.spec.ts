import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOpenIconComponent } from './book-open-icon.component';

describe('BookOpenIconComponent', () => {
  let component: BookOpenIconComponent;
  let fixture: ComponentFixture<BookOpenIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BookOpenIconComponent]
    });
    fixture = TestBed.createComponent(BookOpenIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
