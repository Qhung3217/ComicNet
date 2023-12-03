import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDailyComponent } from './top-daily.component';

describe('TopDailyComponent', () => {
  let component: TopDailyComponent;
  let fixture: ComponentFixture<TopDailyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopDailyComponent]
    });
    fixture = TestBed.createComponent(TopDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
