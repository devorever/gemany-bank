import React from 'react';

const CheckmarkIcon = ({ size = 50, circleColor = '#4CAF50', checkColor = '#FFFFFF' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      {/* Circle Background */}
      <circle cx="50" cy="50" r="45" fill={circleColor} />
      {/* Checkmark Path */}
      <path
        d="M30 50l10 10 20-20"
        stroke={checkColor}
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckmarkIcon;