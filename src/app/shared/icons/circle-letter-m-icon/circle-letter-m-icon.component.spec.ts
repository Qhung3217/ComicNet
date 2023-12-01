import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleLetterMIconComponent } from './circle-letter-m-icon.component';

describe('CircleLetterMIconComponent', () => {
  let component: CircleLetterMIconComponent;
  let fixture: ComponentFixture<CircleLetterMIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CircleLetterMIconComponent]
    });
    fixture = TestBed.createComponent(CircleLetterMIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
