import React from 'react';
import { Tab1Grid, Tab2Grid } from "@/components/BankDetailTemplate";

const BankDetail: React.FC = () => {
  const bank1Data = {
    bankName: "Trade Republic",
    ProductName: "Zinskonto",
    accountManagementFee: "0,00 €",
    interestRate: 3.75,
    interestPaymentsYear: 12,
    interestDistribution: "Verrechnungskonto",
    premiumAmonunt: "-",
    durationNum: "-",
    investmentAmount: "1 € - beliebig",
    coupledProduct: "inklusive Depot",
    endContract: "-",
    depositProtection: "100.000 € (DE & IR)",
    countryCreditRating: "AAA / AA",
    exemptionOrder: true,
  };
/*
    const bank2Data = {
    bankName: "Klarna Bank AB",
    ProductName: "Festgeldkonto",
    accountManagementFee: "0,00 €",
    interestRate: 3.56,
    interestPaymentsYear: 1,
    interestDistribution: "Festgeldkonto",
    premiumAmonunt: "-",
    durationNum: "12 Monat(e)",
    investmentAmount: "1 - 500.000 €",
    coupledProduct: "inklusive Girokonto",
    endContract: "automatisch",
    depositProtection: "100.000 € (Schweden)",
    countryCreditRating: "AAA (bestmögliche Wertung)",
    exemptionOrder: true,
  };

  const bank3Data = {
    bankName: "Openbank",
    ProductName: "Festgeldkonto",
    accountManagementFee: "0,00 €",
    interestRate: 3.45,
    interestPaymentsYear: 1,
    interestDistribution: "Festgeldkonto",
    premiumAmonunt: "-",
    durationNum: "12 Monat(e)",
    investmentAmount: "beliebig",
    coupledProduct: "inklusive Girokonto",
    endContract: "Kündigung erforderlich",
    depositProtection: "100.000 € (Spanien)",
    countryCreditRating: "A+",
    exemptionOrder: true,
  };
*/
  const bankDataArray = [bank1Data,];

  return (
    <div>
      <Tab1Grid banks={bankDataArray} />
    </div>
  );
};


const BankRating: React.FC = () => {
    const tab2Data = {
      conditions: "28/28",
      depositProtection: "4/7",
      taxes: "13/13",
      opening: "13/13",
      total: "58/61",
      description: "Diese Bewertung basiert auf der Recherche und Auswertung unseres Redaktionsteams. Sobald sich Produktmerkmale ändern, passen wir die Bewertung entsprechend an.",
    };
  
    return (
      <div>
        <Tab2Grid {...tab2Data} />
      </div>
    );
  };

export { BankDetail, BankRating };