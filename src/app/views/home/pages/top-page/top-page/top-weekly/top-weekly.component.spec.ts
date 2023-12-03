import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWeeklyComponent } from './top-weekly.component';

describe('TopWeeklyComponent', () => {
  let component: TopWeeklyComponent;
  let fixture: ComponentFixture<TopWeeklyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopWeeklyComponent]
    });
    fixture = TestBed.createComponent(TopWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
