import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentIconComponent } from './recent-icon.component';

describe('RecentIconComponent', () => {
  let component: RecentIconComponent;
  let fixture: ComponentFixture<RecentIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RecentIconComponent]
    });
    fixture = TestBed.createComponent(RecentIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
