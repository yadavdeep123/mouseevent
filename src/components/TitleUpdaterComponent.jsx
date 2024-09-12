import React, { useState, useEffect } from 'react';

function TitleUpdaterComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h1>Click the button to update title</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default TitleUpdaterComponent;
