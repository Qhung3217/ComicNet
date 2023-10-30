import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIconComponent } from './new-icon.component';

describe('NewIconComponent', () => {
  let component: NewIconComponent;
  let fixture: ComponentFixture<NewIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewIconComponent]
    });
    fixture = TestBed.createComponent(NewIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
