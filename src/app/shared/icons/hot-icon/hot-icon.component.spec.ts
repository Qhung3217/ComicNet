import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotIconComponent } from './hot-icon.component';

describe('HotIconComponent', () => {
  let component: HotIconComponent;
  let fixture: ComponentFixture<HotIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HotIconComponent]
    });
    fixture = TestBed.createComponent(HotIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
