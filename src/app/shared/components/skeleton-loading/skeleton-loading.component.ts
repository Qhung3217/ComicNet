import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-skeleton-loading',
  standalone: true,
  imports: [CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './skeleton-loading.component.html',
  styleUrls: ['./skeleton-loading.component.scss'],
})
export class SkeletonLoadingComponent {
  skeletionLoadingTheme = {
    'border-radius': '5px',
    border: '1px solid white',
    'padding-top': '130%',
  };
}
