import React, { useState } from 'react';
import DisplayCounter from '../../components/DisplayCounter';
import IncrementCounter from '../../components/IncrementCounter';

const Statelifting: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <DisplayCounter count={count} />
      <IncrementCounter onIncrement={increment} />
    </div>
  );
}

export default Statelifting;
