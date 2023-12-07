import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GithubIconComponent } from 'src/app/shared/icons/github-icon/github-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, GithubIconComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
