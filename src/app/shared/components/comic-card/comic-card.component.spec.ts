import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicCardComponent } from './comic-card.component';

describe('ComicCardComponent', () => {
  let component: ComicCardComponent;
  let fixture: ComponentFixture<ComicCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ComicCardComponent]
    });
    fixture = TestBed.createComponent(ComicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
