import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appClickRemoveClass]',
  standalone: true,
})
export class ClickRemoveClassDirective {
  @Input('appClickRemoveClass') appClickRemoveClass: {
    classes: string[];
    idElement: string;
  } | null = null;
  @HostListener('click', ['$event']) toggleOpen(event: Event) {
    this.handleRemoveClass(event);
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  private handleRemoveClass(event: Event) {
    const elementTarget = this.renderer.selectRootElement(
      '#' + this.appClickRemoveClass?.idElement,
      true
    );

    if (elementTarget && this.appClickRemoveClass) {
      this.appClickRemoveClass?.classes.forEach((className) =>
        (elementTarget as HTMLElement).classList.remove(className)
      );
    }
  }
}
