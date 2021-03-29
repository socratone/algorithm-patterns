const shortestDistance = require('./shortestDistance');

it('예제 1', () => {
  // 0은 벽
  let board = [
    [1, 1, 1],
    [0, 1, 0],
    [1, 1, 1],
  ];
  expect(shortestDistance(board)).toBe(5);
});

it('예제 2', () => {
  // 0은 벽
  let board = [
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ];
  expect(shortestDistance(board)).toBe(5);
});

it('예제 3', () => {
  // 0은 벽
  let board = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
  ];
  expect(shortestDistance(board)).toBe(13);
});

