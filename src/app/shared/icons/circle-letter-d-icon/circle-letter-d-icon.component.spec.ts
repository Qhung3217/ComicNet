import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleLetterDIconComponent } from './circle-letter-d-icon.component';

describe('CircleLetterDIconComponent', () => {
  let component: CircleLetterDIconComponent;
  let fixture: ComponentFixture<CircleLetterDIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CircleLetterDIconComponent]
    });
    fixture = TestBed.createComponent(CircleLetterDIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
