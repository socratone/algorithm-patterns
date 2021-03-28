function dfs(graph, startNumber) {
  let result = [];

  function recursion(graph, number) {
    result.push(number);
    graph[number].isVisit = true; // 방문 기록

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
