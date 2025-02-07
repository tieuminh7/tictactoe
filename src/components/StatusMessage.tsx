import { type FC } from 'react';
import { type Player, type GameStatus } from '../types/types';

interface StatusMessageProps {
  currentPlayer: Player;
  gameStatus: GameStatus;
}

const StatusMessage: FC<StatusMessageProps> = ({ currentPlayer, gameStatus }) => {
  const getMessage = () => {
    if (gameStatus === 'won') {
      return `Player ${currentPlayer} wins!`;
    }
    if (gameStatus === 'draw') {
      return 'Game is a draw!';
    }
    return `Current Player: ${currentPlayer}`;
  };

  return <div className="status">{getMessage()}</div>;
};

export default StatusMessage;