// 가까운 노드부터 탐색하는 알고리즘

// 탐색 시작 노드를 큐에 추가하고 방문 처리
// 큐에서 노드를 꺼낸 뒤에 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 추가하고 방문 처리
// 큐가 빌 때까지 위를 반복

function bfs(graph, startNumber) {
  const result = [];
  const queue = [];

  // 방문 처리 후 queue에 추가
  graph[startNumber].isVisit = true;
  queue.push(startNumber);

  while (queue.length >= 1) {
    // queue에 담긴 값을 빼서 result에 추가
    const number = queue.shift();
    result.push(number);

    // 인접한 노드 중에서 방문하지 않은 노드만
    for (let i = 0; i < graph[number].nexts.length; i++) {
      const nextNumber = graph[number].nexts[i];
      if (graph[nextNumber].isVisit === false) {
        // 방문 처리 후 queue에 추가
        graph[nextNumber].isVisit = true;
        queue.push(nextNumber);
      }
    }
  }

  return result;
}

module.exports = bfs;