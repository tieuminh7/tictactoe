import { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import ScoreHistory from './components/ScoreHistory';
import { type Board as BoardType, type Player, type GameStatus, type ScoreEntry } from './types/types';

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6], // Diagonals
];

const checkWinner = (board: BoardType): Player | null => {
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

const checkDraw = (board: BoardType) => {
  return board.every((cell) => cell !== null) && !checkWinner(board);
};

const App = () => {
  const [board, setBoard] = useState<BoardType>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');
  const [scoreHistory, setScoreHistory] = useState<ScoreEntry[]>([]);

  const handleClick = (index: number) => {
    if (board[index] || gameStatus !== 'playing') return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      setGameStatus('won');
      setScoreHistory((prev) => [
        ...prev,
        { game: prev.length + 1, winner, timestamp: new Date().toLocaleString() },
      ]);
    } else if (checkDraw(newBoard)) {
      setGameStatus('draw');
      setScoreHistory((prev) => [
        ...prev,
        { game: prev.length + 1, winner: 'Draw', timestamp: new Date().toLocaleString() },
      ]);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameStatus('playing');
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <StatusMessage currentPlayer={currentPlayer} gameStatus={gameStatus} />
      <Board board={board} onClick={handleClick} gameStatus={gameStatus} />
      <button className="restart" onClick={restartGame}>
        Restart Game
      </button>
      <ScoreHistory scoreHistory={scoreHistory} />
    </div>
  );
};

export default App;