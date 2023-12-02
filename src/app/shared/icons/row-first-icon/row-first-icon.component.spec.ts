import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowFirstIconComponent } from './row-first-icon.component';

describe('RowFirstIconComponent', () => {
  let component: RowFirstIconComponent;
  let fixture: ComponentFixture<RowFirstIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RowFirstIconComponent]
    });
    fixture = TestBed.createComponent(RowFirstIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
