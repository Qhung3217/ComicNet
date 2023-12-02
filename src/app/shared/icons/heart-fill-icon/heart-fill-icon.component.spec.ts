import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartFillIconComponent } from './heart-fill-icon.component';

describe('HeartFillIconComponent', () => {
  let component: HeartFillIconComponent;
  let fixture: ComponentFixture<HeartFillIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeartFillIconComponent]
    });
    fixture = TestBed.createComponent(HeartFillIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
