import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Directive({
  selector: '[appRouterActiveClass]',
  standalone: true,
})
export class RouterActiveClassDirective implements OnInit, OnDestroy {
  @Input() classActive: string = '';
  @Input() stringInclude: string = '';
  subscription!: Subscription;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isActiveClass();
      }
    });
    this.isActiveClass();
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  private isActiveClass() {
    // console.log(
    //   this.router.url,
    //   this.router.url.includes(this.stringInclude),
    //   this.elRef.nativeElement
    // );

    if (this.router.url.includes(this.stringInclude))
      this.renderer.addClass(this.elRef.nativeElement, this.classActive);
    else this.renderer.removeClass(this.elRef.nativeElement, this.classActive);
  }
}
