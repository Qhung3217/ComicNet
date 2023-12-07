import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JetpackIconComponent } from '../../icons/jetpack-icon/jetpack-icon.component';

@Component({
  selector: 'app-button-scroll-to-top',
  standalone: true,
  imports: [CommonModule, JetpackIconComponent],
  templateUrl: './button-scroll-to-top.component.html',
  styleUrls: ['./button-scroll-to-top.component.scss'],
})
export class ButtonScrollToTopComponent {
  showButtonToTop = false;
  @HostListener('window:scroll')
  isShowButtonToTop() {
    if (window.scrollY > 1400) this.showButtonToTop = true;
    else this.showButtonToTop = false;
  }
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
