import React, { useState, useEffect } from 'react';
import { CIRCLE_RATE_LEVEL_0, CIRCLE_RATE_LEVEL_1, CIRCLE_RATE_LEVEL_2, CIRCLE_RATE_LEVEL_3, CIRCLE_RATE_LEVEL_4 } from "@/components/DefineConstant";

interface ThreeQuarterCircleProps {
  value: number; // Expect value to be a number
}

const ThreeQuarterCircle: React.FC<ThreeQuarterCircleProps> = ({ value }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const threeQuarterCircumference = (3 / 4) * circumference;
  const [color, setColor] = useState('orange');
  const [displayText, setDisplayText] = useState('');
  const [rateProgressed, setRateProgressed] = useState(0);

  useEffect(() => {
    if (value <= 1.1) {
      setColor('orange');
      setDisplayText('Exzellent');
      setRateProgressed(CIRCLE_RATE_LEVEL_4);
    } else if (value >= 1.2 && value <= 1.4) {
      setColor('orange');
      setDisplayText('Sehr gut');
      setRateProgressed(CIRCLE_RATE_LEVEL_3);
    } else if (value >= 1.5 && value <= 2.0) {
      setColor('orange');
      setDisplayText('Gut');
      setRateProgressed(CIRCLE_RATE_LEVEL_1);
    } else {
      setColor('orange');
      setDisplayText('Befriedigend');
      setRateProgressed(CIRCLE_RATE_LEVEL_0);
    }
  }, [value]);

  const strokeDashoffset = threeQuarterCircumference - (rateProgressed / 100) * threeQuarterCircumference;

  return (
    <svg width="120" height="150" viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
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

      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke={color}
        strokeWidth="10"
        fill="none"
        strokeDasharray={threeQuarterCircumference}
        strokeDashoffset={rateProgressed} 
        strokeLinecap="round"
        transform="rotate(-225 60 60)"
      />

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
