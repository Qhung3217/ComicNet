import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowLastIconComponent } from './row-last-icon.component';

describe('RowLastIconComponent', () => {
  let component: RowLastIconComponent;
  let fixture: ComponentFixture<RowLastIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RowLastIconComponent]
    });
    fixture = TestBed.createComponent(RowLastIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
