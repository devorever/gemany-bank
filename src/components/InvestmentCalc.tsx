import React, { useState } from 'react';

// Utility function for calculating investment details
  export const calculateInvestmentDetails = (InvestmentAmount: number, InterestExpense: number, InvestmentPeriod: number) => {
    const InterestRate = 1 + (InterestExpense/100)
    const Produce = (InvestmentAmount * InterestRate * (InvestmentPeriod/12)) - InvestmentAmount
    return {
      Produce,
    };
};
