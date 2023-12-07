import {
  Directive,
  Renderer2,
  ElementRef,
  Input,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appClickToggleClass]',
  standalone: true,
})
export class ClickToggleClassDirective implements OnInit {
  @Input('appClickToggleClass') appClickToggleClass: {
    classToggle: string[];
    idElementToggle: string;
  } | null = null;
  @Input('enableInMaxScreen') enableInMaxScreen: false | number = false;
  enable = true;
  elfToggle: any;
  @HostListener('click') handleClick() {
    if (!this.appClickToggleClass || !this.enable) return;
    this.elfToggle = this.getElementToggleClass(this.elRef.nativeElement);
    this.toggleClasses(this.elfToggle);
  }
  @HostListener('window:resize') onResize() {
    this.checkEnable();
  }
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
  ngOnInit(): void {
    this.checkEnable();
  }
  private getElementToggleClass(elRef: any) {
    let parent = this.renderer.parentNode(elRef);
    let result = parent.querySelector(
      '#' + this.appClickToggleClass!.idElementToggle
    );
    if (!result && parent.id === this.appClickToggleClass!.idElementToggle) {
      result = parent;
    }
    return result;
  }
  private toggleClasses(elRef: any) {
    this.appClickToggleClass?.classToggle.forEach((toggleClass) => {
      elRef?.classList.toggle(toggleClass);
    });
  }
  private checkEnable() {
    (this.enableInMaxScreen && this.enableInMaxScreen > window.innerWidth) ||
    this.enableInMaxScreen === false
      ? (this.enable = true)
      : (this.enable = false);
  }
}
