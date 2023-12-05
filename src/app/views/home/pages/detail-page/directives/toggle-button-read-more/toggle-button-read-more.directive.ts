import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appToggleButtonReadMore]',
})
export class ToggleButtonReadMoreDirective implements AfterViewInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    const element = this.elRef.nativeElement as HTMLElement;
    const paragraphElemenet = element.querySelector('p');

    if (
      paragraphElemenet &&
      paragraphElemenet.scrollHeight <= paragraphElemenet.clientHeight
    ) {
      const btnElement = element.querySelector('#readMoreBtn');
      this.renderer.addClass(btnElement, 'hidden');
    }
  }
}
