import { INTEREST_RATE } from "@/components/DefineConstant";

// Utility function for calculating investment details
  export const calculateInvestmentDetails = (InvestmentAmount: number, InvestmentPeriod: number) => {
    const InterestExpense = 3.75 
    
    const Produce = (InvestmentAmount * INTEREST_RATE * (InvestmentPeriod/12)) - InvestmentAmount
    if (InvestmentPeriod < 12)
      {const Produce = (InvestmentAmount * INTEREST_RATE * (InvestmentPeriod/12))}
    return {
      InterestExpense,
      Produce,
    };
};
