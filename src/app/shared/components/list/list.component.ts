import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicCardComponent } from '../comic-card/comic-card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ComicCardComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {}
