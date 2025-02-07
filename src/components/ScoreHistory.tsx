import { type FC } from 'react';
import { type ScoreEntry } from '../types/types';

interface ScoreHistoryProps {
  scoreHistory: ScoreEntry[];
}

const ScoreHistory: FC<ScoreHistoryProps> = ({ scoreHistory }) => {
  return (
    <div className="score-history">
      <h2>Score History</h2>
      {scoreHistory.length === 0 ? (
        <p>No games played yet</p>
      ) : (
        <ul>
          {scoreHistory.map((entry) => (
            <li key={entry.game}>
              Game {entry.game}: {entry.winner} ({entry.timestamp})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ScoreHistory;