import React, { useState, useEffect } from 'react';

function MouseMovementComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Mouse Position</h1>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  );
}

export default MouseMovementComponent;
