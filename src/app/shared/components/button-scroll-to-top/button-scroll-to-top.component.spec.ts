import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonScrollToTopComponent } from './button-scroll-to-top.component';

describe('ButtonScrollToTopComponent', () => {
  let component: ButtonScrollToTopComponent;
  let fixture: ComponentFixture<ButtonScrollToTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonScrollToTopComponent]
    });
    fixture = TestBed.createComponent(ButtonScrollToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
