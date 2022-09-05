import { IsEmptyValuePipe } from './is-empty-value.pipe';

describe('IsEmptyValuePipe', () => {
  it('create an instance', () => {
    const pipe = new IsEmptyValuePipe();
    expect(pipe).toBeTruthy();
  });
});
