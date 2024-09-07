import React from 'react';

const InfoIcon = ({ size = 50, fillColor = '#003366', circleColor = '#E0E0E0' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      {/* Circle Background */}
      <circle cx="50" cy="50" r="45" fill={circleColor} />
      {/* Info Letter "i" */}
      <text
        x="50"
        y="68"
        fontSize="40"
        fontWeight="bold"
        textAnchor="middle"
        fill={fillColor}
      >
        i
      </text>
      {/* Dot above the "i" */}
      <circle cx="50" cy="30" r="5" fill={fillColor} />
    </svg>
  );
};

export default InfoIcon;