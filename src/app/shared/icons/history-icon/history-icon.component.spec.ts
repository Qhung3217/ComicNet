import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryIconComponent } from './history-icon.component';

describe('HistoryIconComponent', () => {
  let component: HistoryIconComponent;
  let fixture: ComponentFixture<HistoryIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HistoryIconComponent]
    });
    fixture = TestBed.createComponent(HistoryIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
