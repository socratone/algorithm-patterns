const dfs = require('./dfs');

let graph;

beforeEach(() => {
  graph = {
    1: {
      isVisit: false,
      nexts: [2, 3, 8],
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
  expect(dfs(graph, 1)).toEqual([1, 2, 7, 6, 8, 3, 4, 5]);
});

it('2에서 시작할 때', () => {
  expect(dfs(graph, 2)).toEqual([2, 1, 3, 4, 5, 8, 7, 6]);
});

it('3에서 시작할 때', () => {
  expect(dfs(graph, 3)).toEqual([3, 1, 2, 7, 6, 8, 4, 5]);
});

it('4에서 시작할 때', () => {
  expect(dfs(graph, 4)).toEqual([4, 3, 1, 2, 7, 6, 8, 5]);
});
