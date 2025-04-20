function solution(board) {
  let count = 0;
  let arr = board.map((row) => [...row]);
  const n = board.length;
  const m = board[0].length;
  const dx = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 0, 1, -1, 0, 1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        for (let d = 0; d < 9; d++) {
          const nx = i + dx[d];
          const ny = j + dy[d];
          if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
            arr[nx][ny] = 1;
          }
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        count++;
      }
    }
  }
  return count;
}