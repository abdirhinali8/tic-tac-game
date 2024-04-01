let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameEnded = false;

function makeMove(index) {
  if (gameEnded || board[index] !== '') return;
  
  board[index] = currentPlayer;
  document.getElementById('board').children[index].innerText = currentPlayer;
  
  if (checkWin()) {
    document.getElementById('message').innerText = `${currentPlayer} wins!`;
    gameEnded = true;
    return;
  }
  
  if (checkDraw()) {
    document.getElementById('message').innerText = "It's a draw!";
    gameEnded = true;
    return;
  }
  
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
  ];
  
  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  
  return false;
}

function checkDraw() {
  return board.every(cell => cell !== '');
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameEnded = false;
  document.getElementById('message').innerText = '';
  document.getElementById('board').querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
