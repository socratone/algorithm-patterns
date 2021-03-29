function shortestDistance(board) {
  let x = 0;
  let y = 0;
  const queue = [];

  queue.push([x, y]); // queue에 넣고
  board[x][y] = 1; // 방문 처리

  while (queue.length > 0) {
    const [x, y] = queue.shift(); // queue에서 꺼내고

    // 벽으로 막혀 있지 않고 처음 가는 길이고 board의 범위를 넘어가지 않았다면
    // 위쪽
    if (board[x - 1] && board[x - 1][y] === 1) {
      queue.push([x - 1, y]); // queue에 추가
      board[x - 1][y] = board[x][y] + 1; // 현재 위치에 1을 더하여 방문 처리
    }
    // 아래쪽
    if (board[x + 1] && board[x + 1][y] === 1) {
      queue.push([x + 1, y]);
      board[x + 1][y] = board[x][y] + 1;
    }
    // 왼쪽
    if (board[x] && board[x][y - 1] === 1) {
      queue.push([x, y - 1]);
      board[x][y - 1] = board[x][y] + 1;
    }
    // 오른쪽
    if (board[x] && board[x][y + 1] === 1) {
      queue.push([x, y + 1]);
      board[x][y + 1] = board[x][y] + 1;
    }
  }

  // 출구인 오른쪽 아래의 값을 반환
  return board[board.length - 1][board[0].length - 1];
}

module.exports = shortestDistance;
