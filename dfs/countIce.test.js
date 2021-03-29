const countIce = require('./countIce');

it('1조각', () => {
  // 0에만 얼음이 담긴다.
  let board = [
    [0, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ];
  expect(countIce(board)).toBe(1);
});

it('2조각', () => {
  // 0에만 얼음이 담긴다.
  let board = [
    [0, 0, 1, 1, 1],
    [1, 1, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ];
  expect(countIce(board)).toBe(2);
});

it('3조각', () => {
  // 0에만 얼음이 담긴다.
  let board = [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ];
  expect(countIce(board)).toBe(3);
});

it('4조각', () => {
  // 0에만 얼음이 담긴다.
  let board = [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
  ];
  expect(countIce(board)).toBe(4);
});

