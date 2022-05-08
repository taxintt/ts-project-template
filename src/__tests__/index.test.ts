import {hello} from '../index';

test('print hello world', () => {
  expect(hello("test")).toBe("Hello test!");
});