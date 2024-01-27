import { useState } from 'react';

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button type="button" onClick={handleClick} className="btn">
        Increment
      </button>
    </div>
  );
};

export default ErrorExample;
