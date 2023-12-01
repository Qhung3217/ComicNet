import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleLetterWIconComponent } from './circle-letter-w-icon.component';

describe('CircleLetterWIconComponent', () => {
  let component: CircleLetterWIconComponent;
  let fixture: ComponentFixture<CircleLetterWIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CircleLetterWIconComponent]
    });
    fixture = TestBed.createComponent(CircleLetterWIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
