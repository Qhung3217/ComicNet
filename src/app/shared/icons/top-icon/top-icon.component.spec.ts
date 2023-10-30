import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopIconComponent } from './top-icon.component';

describe('TopIconComponent', () => {
  let component: TopIconComponent;
  let fixture: ComponentFixture<TopIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TopIconComponent]
    });
    fixture = TestBed.createComponent(TopIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
