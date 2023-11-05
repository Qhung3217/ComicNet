import { Directive, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
  standalone: true,
})
export class ScrollToDirective {
  @HostListener('click') scrollTo() {
    const targetElement = this.renderer.selectRootElement(
      '#scrollToThis',
      true
    );
    console.log(targetElement);

    if (targetElement)
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
  }

  constructor(private renderer: Renderer2) {}
}
