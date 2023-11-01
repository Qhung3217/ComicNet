import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartIconComponent } from './heart-icon.component';

describe('HeartIconComponent', () => {
  let component: HeartIconComponent;
  let fixture: ComponentFixture<HeartIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeartIconComponent]
    });
    fixture = TestBed.createComponent(HeartIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
