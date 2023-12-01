import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAllComponent } from './top-all.component';

describe('TopAllComponent', () => {
  let component: TopAllComponent;
  let fixture: ComponentFixture<TopAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopAllComponent]
    });
    fixture = TestBed.createComponent(TopAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
