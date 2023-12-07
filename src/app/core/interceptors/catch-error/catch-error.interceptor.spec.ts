import { TestBed } from '@angular/core/testing';

import { CatchErrorInterceptor } from './catch-error.interceptor';

describe('CatchErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CatchErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CatchErrorInterceptor = TestBed.inject(CatchErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
