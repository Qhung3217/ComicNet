import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIconComponent } from './update-icon.component';

describe('UpdateIconComponent', () => {
  let component: UpdateIconComponent;
  let fixture: ComponentFixture<UpdateIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UpdateIconComponent]
    });
    fixture = TestBed.createComponent(UpdateIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
