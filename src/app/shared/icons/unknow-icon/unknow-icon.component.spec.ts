import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknowIconComponent } from './unknow-icon.component';

describe('UnknowIconComponent', () => {
  let component: UnknowIconComponent;
  let fixture: ComponentFixture<UnknowIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UnknowIconComponent]
    });
    fixture = TestBed.createComponent(UnknowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
