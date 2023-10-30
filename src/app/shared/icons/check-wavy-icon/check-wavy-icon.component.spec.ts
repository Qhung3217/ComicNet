import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckWavyIconComponent } from './check-wavy-icon.component';

describe('CheckWavyIconComponent', () => {
  let component: CheckWavyIconComponent;
  let fixture: ComponentFixture<CheckWavyIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckWavyIconComponent]
    });
    fixture = TestBed.createComponent(CheckWavyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
