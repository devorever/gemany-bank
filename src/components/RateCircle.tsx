import React, { useState, useEffect } from 'react';
import FilterSection from '@/components/FilterSection';

interface ThreeQuarterCircleProps {
  value: number; // Expect value to be a number
}

const ThreeQuarterCircle: React.FC<ThreeQuarterCircleProps> = ({ value }) => {
const radius = 35;
const circumference = 2 * Math.PI * radius;
const threeQuarterCircumference = (3 / 4) * circumference;
const strokeDashoffset = threeQuarterCircumference - (value / 100) * threeQuarterCircumference;
const [color, setColor] = useState('orange');
const [displayText, setDisplayText] = useState('');

  useEffect(() => {


    if (value > 75) {
      setColor('orange');
      setDisplayText('Exzellent');
    } else if ((value >= 60)&&(value <= 75)) {
      setColor('orange');
      setDisplayText('Sehr gut');
    } else if ((value >= 45)&&(value <= 60)){
      setColor('orange');
      setDisplayText('Gut');
    } else {
      setColor('orange');
      setDisplayText('Befriedigend');
    }
  }, [value]);

  return (
    <svg width="120" height="150" viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle: to create the invisible quarter at the bottom center */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="lightgray"
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={-(circumference / 4)}
        strokeLinecap="round"
        transform="rotate(45 60 60)"
      />
      {/* Visible three-quarter circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke={color}
        strokeWidth="10"
        fill="none"
        strokeDasharray={threeQuarterCircumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-225 60 60)" // Rotate to start the visible arc at the top
      />
      {/* Value text */}
      <text
        x="50%"
        y="35%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="30"
        fill="black"
        dy=".3em"
      >
        {value}        
      </text>       
      {/* Display text below the circle */}
      <text
        x="50%"
        y="120"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="16"
        fill="black"
      >
        {displayText}
      </text>
    </svg>
  );
};

export default ThreeQuarterCircle;