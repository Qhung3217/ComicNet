import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRecommendComponent } from './section-recommend.component';

describe('SectionRecommendComponent', () => {
  let component: SectionRecommendComponent;
  let fixture: ComponentFixture<SectionRecommendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionRecommendComponent]
    });
    fixture = TestBed.createComponent(SectionRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
