import { DEFAULT_IMAGE_URL } from 'src/app/core/constants/image';
import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appImageLoadFailed]',
  standalone: true,
})
export class ImageLoadFailedDirective {
  @Input() backupSrc: string = '';

  @HostListener('error') handleImageLoadFailed() {
    const element: HTMLElement = this.elf.nativeElement;
    if (element.tagName === 'IMG') {
      if (this.backupSrc === '')
        this.renderer.setAttribute(element, 'src', DEFAULT_IMAGE_URL);
      else if (element.getAttribute('src') === this.backupSrc)
        this.renderer.removeAttribute(element, 'src');
      else this.renderer.setAttribute(element, 'src', this.backupSrc);
    }
  }

  constructor(private elf: ElementRef, private renderer: Renderer2) {}
}
