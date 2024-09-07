import React from 'react';

const CircleIcon = ({ size = 50, outerColor = '#FFA500', innerColor = '#FFFFFF' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      {/* Outer Circle */}
      <circle cx="50" cy="50" r="45" fill={outerColor} />
      {/* Inner Circle */}
      <circle cx="50" cy="50" r="20" fill={innerColor} />
    </svg>
  );
};

export default CircleIcon;