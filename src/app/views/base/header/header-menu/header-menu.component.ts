import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent {
  @Output() navigate = new EventEmitter();
  onNaviate() {
    this.navigate.emit(true);
  }
}
