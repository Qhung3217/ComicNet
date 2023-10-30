import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleIconComponent } from './male-icon.component';

describe('MaleIconComponent', () => {
  let component: MaleIconComponent;
  let fixture: ComponentFixture<MaleIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaleIconComponent]
    });
    fixture = TestBed.createComponent(MaleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
