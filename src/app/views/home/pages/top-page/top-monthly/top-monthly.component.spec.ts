import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMonthlyComponent } from './top-monthly.component';

describe('TopMonthlyComponent', () => {
  let component: TopMonthlyComponent;
  let fixture: ComponentFixture<TopMonthlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMonthlyComponent]
    });
    fixture = TestBed.createComponent(TopMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
