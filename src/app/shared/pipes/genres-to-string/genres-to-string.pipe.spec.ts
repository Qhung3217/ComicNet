import { GenresToStringPipe } from './genres-to-string.pipe';

describe('GenresToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new GenresToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
