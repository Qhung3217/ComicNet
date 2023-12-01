import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicIconComponent } from './comic-icon.component';

describe('ComicIconComponent', () => {
  let component: ComicIconComponent;
  let fixture: ComponentFixture<ComicIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ComicIconComponent]
    });
    fixture = TestBed.createComponent(ComicIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
