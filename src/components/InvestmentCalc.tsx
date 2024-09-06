// utils/investmentCalculations.js

// Utility function for calculating investment details
  export const calculateInvestmentDetails = (InvestmentAmount: any) => {
    const InterestExpense = InvestmentAmount * 1.029;                   // Interest on investments
    const InvestmentPeriod = Math.floor((InterestExpense * 12) / 60);   // Investment period
    const Produce = Number.isInteger(InvestmentPeriod) ? InvestmentPeriod - 10 : 0; // Production amount: if InvestmentPeriod is an integer before assigning the Produce value

    return {
      InterestExpense,
      InvestmentPeriod,
      Produce,
    };
  };