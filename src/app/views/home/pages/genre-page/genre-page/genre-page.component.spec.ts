import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrePageComponent } from './genre-page.component';

describe('GenrePageComponent', () => {
  let component: GenrePageComponent;
  let fixture: ComponentFixture<GenrePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenrePageComponent]
    });
    fixture = TestBed.createComponent(GenrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
