import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private titleService: Title, private metaService: Meta) {}
  setTitle(title: string) {
    this.titleService.setTitle(title);
  }
  updateTag(name: string, content: string) {
    this.metaService.updateTag({ name, content });
  }
  setSeoData(title: string, content: string) {
    this.setTitle(title);
    this.updateTag('description', content);
  }
}
