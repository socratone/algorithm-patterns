const change = require('./change');

it('1', () => {
  expect(change(500)).toBe(1);
  expect(change(100)).toBe(1);
  expect(change(50)).toBe(1);
  expect(change(10)).toBe(1);
});

it('2', () => {
  expect(change(510)).toBe(2);
  expect(change(200)).toBe(2);
  expect(change(60)).toBe(2);
  expect(change(20)).toBe(2);
});

it('6', () => {
  expect(change(1260)).toBe(6);
});