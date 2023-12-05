import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallLoadingSpinnerComponent } from './small-loading-spinner.component';

describe('SmallLoadingSpinnerComponent', () => {
  let component: SmallLoadingSpinnerComponent;
  let fixture: ComponentFixture<SmallLoadingSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SmallLoadingSpinnerComponent]
    });
    fixture = TestBed.createComponent(SmallLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
