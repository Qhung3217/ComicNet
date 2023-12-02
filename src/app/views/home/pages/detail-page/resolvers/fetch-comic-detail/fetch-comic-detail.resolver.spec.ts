import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { fetchComicDetailResolver } from './fetch-comic-detail.resolver';

describe('fetchComicDetailResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => fetchComicDetailResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
