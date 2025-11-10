import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.22836 2.32115L20.895 12.2166L12.5617 13.9833L4.22836 2.32115Z"
          fill="#00FFFF"
          stroke="#000000"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;