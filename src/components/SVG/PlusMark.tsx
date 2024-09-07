import React from 'react';

const PlusIcon = ({ size = 50, color = '#008C45', strokeColor = '#FFFFFF' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      {/* Circle Background */}
      <circle cx="50" cy="50" r="40" fill={color} />
      {/* Plus Sign */}
      <rect x="45" y="20" width="10" height="60" fill={strokeColor} />
      <rect x="20" y="45" width="60" height="10" fill={strokeColor} />
    </svg>
  );
};

export default PlusIcon;