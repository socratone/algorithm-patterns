const bfs = require('./bfs');

let graph;

beforeEach(() => {
  graph = {
    1: {
      isVisit: false,
      nexts: [2, 3, 8], // 오름차순
    },
    2: {
      isVisit: false,
      nexts: [1, 7],
    },
    3: {
      isVisit: false,
      nexts: [1, 4, 5],
    },
    4: {
      isVisit: false,
      nexts: [3, 5],
    },
    5: {
      isVisit: false,
      nexts: [3, 4],
    },
    6: {
      isVisit: false,
      nexts: [7],
    },
    7: {
      isVisit: false,
      nexts: [2, 6, 8],
    },
    8: {
      isVisit: false,
      nexts: [1, 7],
    },
  };
});

it('1에서 시작할 때', () => {
  expect(bfs(graph, 1)).toEqual([1, 2, 3, 8, 7, 4, 5, 6]);
});

it('2에서 시작할 때', () => {
  expect(bfs(graph, 2)).toEqual([2, 1, 7, 3, 8, 6, 4, 5]);
});

it('3에서 시작할 때', () => {
  expect(bfs(graph, 3)).toEqual([3, 1, 4, 5, 2, 8, 7, 6]);
});

it('4에서 시작할 때', () => {
  expect(bfs(graph, 4)).toEqual([4, 3, 5, 1, 2, 8, 7, 6]);
});

it('5에서 시작할 때', () => {
  expect(bfs(graph, 5)).toEqual([5, 3, 4, 1, 2, 8, 7, 6]);
});

it('6에서 시작할 때', () => {
  expect(bfs(graph, 6)).toEqual([6, 7, 2, 8, 1, 3, 4, 5]);
});

it('7에서 시작할 때', () => {
  expect(bfs(graph, 7)).toEqual([7, 2, 6, 8, 1, 3, 4, 5]);
});

it('8에서 시작할 때', () => {
  expect(bfs(graph, 8)).toEqual([8, 1, 7, 2, 3, 6, 4, 5]);
});
