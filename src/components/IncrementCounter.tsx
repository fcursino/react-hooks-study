import React from 'react';

interface IncrementCounterProps {
  onIncrement: () => void;
}

const IncrementCounter: React.FC<IncrementCounterProps> = ({ onIncrement }) => {
  return <button onClick={onIncrement}>Incrementar</button>;
};

export default IncrementCounter;
