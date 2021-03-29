// 얼음이 상하좌우로만 연결된다고 할 때 몇 조각으로 나뉘는지

function countIce(board) {
  function dfs(x, y) {
    // board를 넘어간 경우에는 바로 끝낸다.
    if (x < 0 || y < 0 || x > board.length - 1 || y > board[0].length - 1) {
      return false;
    }

    // 비어 있을 경우
    if (board[x][y] === 0) {
      board[x][y] = 1;

      // 인접한 노드를 모두 채운다.
      dfs(x - 1, y); 
      dfs(x + 1, y);
      dfs(x, y - 1);
      dfs(x, y + 1);

      return true;
    }

    return false;
  }

  let count = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // 비어 있을 경우
      if (dfs(i, j) === true) {
        count++;
      }
    }
  }

  return count;
}

module.exports = countIce;
