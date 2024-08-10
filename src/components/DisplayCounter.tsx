import React from 'react';

interface DisplayCounterProps {
  count: number;
}

const DisplayCounter: React.FC<DisplayCounterProps> = ({ count }) => {
  return <h2>Contador: {count}</h2>;
};

export default DisplayCounter;
