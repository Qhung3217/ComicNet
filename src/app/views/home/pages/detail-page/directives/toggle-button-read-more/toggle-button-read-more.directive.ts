import {
  AfterViewChecked,
  AfterViewInit,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appToggleButtonReadMore]',
})
export default class ToggleButtonReadMoreDirective
  implements AfterViewInit, AfterViewChecked
{
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngAfterViewChecked(): void {
    this.isShowButton();
  }

  ngAfterViewInit(): void {
    this.isShowButton();
  }

  private isShowButton() {
    const element = this.elRef.nativeElement as HTMLElement;
    const paragraphElemenet = element.querySelector('p');

    if (
      paragraphElemenet &&
      paragraphElemenet.scrollHeight <= paragraphElemenet.clientHeight
    ) {
      const btnElement = element.querySelector('#readMoreBtn');
      this.renderer.addClass(btnElement, 'hidden');
    } else {
      const btnElement = element.querySelector('#readMoreBtn');
      this.renderer.removeClass(btnElement, 'hidden');
    }
  }
}
