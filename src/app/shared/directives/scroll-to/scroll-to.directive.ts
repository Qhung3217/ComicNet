import { Directive, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
  standalone: true,
})
export class ScrollToDirective {
  @Input() idElement: string = 'scrollToThis';
  @HostListener('click') scrollTo() {
    const targetElement = this.renderer.selectRootElement(
      '#' + this.idElement,
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
