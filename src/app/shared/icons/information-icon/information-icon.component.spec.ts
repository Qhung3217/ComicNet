import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationIconComponent } from './information-icon.component';

describe('InformationIconComponent', () => {
  let component: InformationIconComponent;
  let fixture: ComponentFixture<InformationIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InformationIconComponent]
    });
    fixture = TestBed.createComponent(InformationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
