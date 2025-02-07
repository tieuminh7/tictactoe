import { type FC } from 'react';

interface CellProps {
  value: string | null;
  onClick: () => void;
  disabled: boolean;
}

const Cell: FC<CellProps> = ({ value, onClick, disabled }) => {
  const cellClass = `cell ${value === 'X' ? 'x-cell' : value === 'O' ? 'o-cell' : ''}`;
  return (
    <button className={cellClass} onClick={onClick} disabled={disabled}>
      {value}
    </button>
  );
};

export default Cell;