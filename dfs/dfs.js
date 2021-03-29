// 깊이 우선 탐색

function dfs(graph, startNumber) {
  const result = [];

  function recursion(graph, number) {
    result.push(number);
    graph[number].isVisit = true; // 방문 처리

    // 인접한 노드 중에서 방문하지 않은 노드만
    for (let i = 0; i < graph[number].nexts.length; i++) {
      const nextNumber = graph[number].nexts[i];
      if (graph[nextNumber].isVisit === false) {
        recursion(graph, nextNumber);
      }
    }
  }

  recursion(graph, startNumber);

  return result;
}

module.exports = dfs;
