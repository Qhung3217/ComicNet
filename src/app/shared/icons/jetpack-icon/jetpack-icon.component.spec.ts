import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JetpackIconComponent } from './jetpack-icon.component';

describe('JetpackIconComponent', () => {
  let component: JetpackIconComponent;
  let fixture: ComponentFixture<JetpackIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JetpackIconComponent]
    });
    fixture = TestBed.createComponent(JetpackIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
