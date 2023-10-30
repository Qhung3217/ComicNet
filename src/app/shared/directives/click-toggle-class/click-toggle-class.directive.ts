import {
  Directive,
  Renderer2,
  ElementRef,
  Input,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appClickToggleClass]',
  standalone: true,
})
export class ClickToggleClassDirective {
  @Input() appClickToggleClass: {
    classToggle: string[];
    idElementToggle: string;
  } | null = null;
  elfToggle: any;
  @HostListener('click') handleClick() {
    if (!this.appClickToggleClass) return;
    this.elfToggle = this.getElementToggleClass(this.elRef.nativeElement);
    // this.elfToggle.classList.toggle(this.appClickToggleClass.classToggle);
    this.toggleClasses(this.elfToggle);
  }
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  private getElementToggleClass(elRef: any) {
    let parent = this.renderer.parentNode(elRef);
    return parent.querySelector(
      '#' + this.appClickToggleClass!.idElementToggle
    );
  }
  private toggleClasses(elRef: any) {
    this.appClickToggleClass?.classToggle.forEach((toggleClass) => {
      elRef?.classList.toggle(toggleClass);
    });
  }
}
