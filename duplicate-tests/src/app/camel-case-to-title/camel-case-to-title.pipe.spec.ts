import { CamelCaseToTitlePipe } from './camel-case-to-title.pipe';

describe('CamelCaseToTitlePipe', () => {
  it('should convert "helloWorld" to "Hello World"', () => {
    const pipe = new CamelCaseToTitlePipe();
    expect(pipe.transform('helloWorld')).toBe('Hello World');
  });
});
