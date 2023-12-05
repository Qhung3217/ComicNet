import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftIconComponent } from './left-icon.component';

describe('LeftIconComponent', () => {
  let component: LeftIconComponent;
  let fixture: ComponentFixture<LeftIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeftIconComponent]
    });
    fixture = TestBed.createComponent(LeftIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
