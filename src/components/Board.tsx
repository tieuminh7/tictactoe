import { type FC } from 'react';
import Cell from './Cell';
import { type Board as BoardType, type GameStatus } from '../types/types';

interface BoardProps {
  board: BoardType;
  onClick: (index: number) => void;
  gameStatus: GameStatus;
}

const Board: FC<BoardProps> = ({ board, onClick, gameStatus }) => {
  return (
    <div className="board">
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          onClick={() => onClick(index)}
          disabled={cell !== null || gameStatus !== 'playing'}
        />
      ))}
    </div>
  );
};

export default Board;


