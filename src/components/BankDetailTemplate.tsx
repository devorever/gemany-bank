import React from 'react';
import PlusIcon from "@/components/SVG/PlusMark";
import InfoIcon from "@/components/SVG/ExclamMark";
import CheckmarkIcon from "@/components/SVG/GreenExclamMark";
import CircleIcon from "@/components/SVG/CircleMark";

// Define types for the props (optional but recommended)
type BankData = {
  bankId: string;
  bankName: string;
  ProductName: string;
  accountManagementFee: string;
  interestRate: number;
  interestPaymentsYear: number;
  interestDistribution: string;
  premiumAmonunt: string;
  durationNum: string;
  investmentAmount: string;
  coupledProduct: string;
  endContract: string;
  depositProtection: string;
  countryCreditRating: string;
  exemptionOrder: boolean;
};

interface Tab1GridProps {
  banks: BankData[];
}

interface Tab2GridProps {
  conditions: string;
  depositProtection: string;
  taxes: string;
  opening: string;
  total: string;
  description: string;
}



const Tab1Grid: React.FC<Tab1GridProps> = ({ banks }) => {
  return (
    <div>
      {Array.isArray(banks) && banks.map((bank, index) => (
        <div key={index}>
          <div className="flex flex-wrap justify-between tab-detail-table">
      <div className="first-column w-full md:w-1/2 p-4">
        <table className="table-auto w-full detail-table-0">
          <thead>
            <tr className="tab-sub-tile">
              <th className="text-left p-2">Anbieter</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Bank</td>
              <td className="text-right p-2">{bank.bankName}</td>
            </tr>
            <tr>
              <td className="p-2">Produkt</td>
              <td className="text-right p-2" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>{bank.ProductName}</span>
                <InfoIcon size={20} fillColor="#003366" circleColor="#E0E0E0" />
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table-auto w-full detail-table-1 mt-4">
          <thead>
            <tr className="tab-sub-tile">
              <th className="text-left p-2">Konditionen</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Kontoführungsgebühr</td>
              <td className="text-right p-2">{bank.accountManagementFee}</td>
            </tr>
            <tr>
              <td className="text-left p-2" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'left' }}>
                <span style={{ marginRight: '8px' }}>Zinssatz p. a.</span>
                <InfoIcon size={20} fillColor="#003366" circleColor="#E0E0E0" />
              </td>
              <td className="text-right p-2">
                <span className="text-right calculated interest">{bank.interestRate}</span> %
              </td>
            </tr>
            <tr>
              <td className="p-2">Zinszahlungen pro Jahr</td>
              <td className="text-right p-2">{bank.interestPaymentsYear}</td>
            </tr>
            <tr>
              <td className="text-left p-2" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'left' }}>
                <span style={{ marginRight: '8px' }}>Zinsausschüttung</span>
                <InfoIcon size={20} fillColor="#003366" circleColor="#E0E0E0" />
              </td>
              <td className="text-right p-2">{bank.interestDistribution}</td>
            </tr>
            <tr>
              <td className="p-2">Prämie</td>
              <td className="text-right p-2">{bank.premiumAmonunt}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="second-column w-full md:w-1/2 p-4">
        <table className="table-auto w-full detail-table-0">
          <thead>
            <tr className="tab-sub-tile">
              <th className="text-left p-2">Konto</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Laufzeit</td>
              <td className="text-right p-2">{bank.durationNum}</td>
            </tr>
            <tr>
              <td className="p-2">Anlagebetrag</td>
              <td className="text-right p-2">{bank.investmentAmount}</td>
            </tr>
            <tr>
              <td className="p-2">Koppelprodukt</td>
              <td className="text-right p-2">{bank.coupledProduct}</td>
            </tr>
            <tr>
              <td className="p-2">Vertragsende</td>
              <td className="text-right p-2">{bank.endContract}</td>
            </tr>
          </tbody>
        </table>

        <table className="table-auto w-full detail-table-1 mt-4">
          <thead>
            <tr className="tab-sub-tile">
              <th className="text-left p-2">Sicherheit & Steuern</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left p-2">Einlagensicherung</td>
              <td className="text-right p-2">{bank.depositProtection}</td>
            </tr>
            <tr>
              <td className="text-left p-2">Bonität des Landes</td>
              <td className="text-right p-2">{bank.countryCreditRating}</td>
            </tr>
            <tr>
              <td className="text-left p-2">Freistellungsauftrag</td>
              <td className="text-right p-2">
                {bank.exemptionOrder ? (
                  <CheckmarkIcon size={20} circleColor="#4CAF50" checkColor="#FFFFFF" />
                ) : (
                  <span>&nbsp;</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        </div>
      ))}
    </div>
  );
};

const Tab2Grid: React.FC<Tab2GridProps> = ({ 
  conditions,
  depositProtection,
  taxes,
  opening,
  total,
  description,
  }) => {
  return (
    <div className="flex flex-wrap justify-between tab-detail-table">
      <div className="first-column w-full md:w-1/2 p-4">
        <table className="table-auto w-full  detail-table-0">
          <thead>
            <tr className="tab-sub-tile">
              <th className="text-left p-2">KATEGORIEN</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td className="p-2" style={{ display: 'flex', alignItems: 'center' }}>
              <PlusIcon size={20} color="#4CAF50" strokeColor="#FFFFFF" />
              <span style={{ margin: '0px 0px 1px 3px' }}>Konditionen</span>
            </td>
            <td className="text-right p-2">{conditions}</td>
          </tr>
            <tr>
               <td className="p-2" style={{ display: 'flex', alignItems: 'center' }}>
               <CircleIcon size={20} outerColor="#FFA500" innerColor="#FFFFFF" />
                <span style={{ margin: '0px 0px 1px 3px' }}>Einlagensicherung</span>
              </td>
              <td className="text-right p-2">{depositProtection}</td>
            </tr>
            <tr>
              <td className="p-2" style={{ display: 'flex', alignItems: 'center' }}>
                <PlusIcon size={20} color="#4CAF50" strokeColor="#FFFFFF" />
                <span style={{ margin: '0px 0px 1px 3px' }}>Steuern</span>
              </td>
              <td className="text-right p-2">{taxes}</td>
            </tr>
            <tr>
              <td className="p-2" style={{ display: 'flex', alignItems: 'center' }}>
                <PlusIcon size={20} color="#4CAF50" strokeColor="#FFFFFF" />
                <span style={{ margin: '0px 0px 1px 3px' }}>Eröffnung</span>
              </td>
              <td className="text-right p-2">{opening}</td>
            </tr>
            <tr>
              <td className="p-2">Gesamt</td>
              <td className="text-right p-2">{total}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="second-column w-full md:w-1/2 p-4">
        <table className="table-auto w-full  detail-table-0">
          <tbody>
            <tr className="lvl-description text-left">
              <td className="text-left p-2">{description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
};

export { Tab1Grid, Tab2Grid };

