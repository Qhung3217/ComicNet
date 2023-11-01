import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComicPanelComponent } from './section-comic-panel.component';

describe('SectionComicPanelComponent', () => {
  let component: SectionComicPanelComponent;
  let fixture: ComponentFixture<SectionComicPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionComicPanelComponent]
    });
    fixture = TestBed.createComponent(SectionComicPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
