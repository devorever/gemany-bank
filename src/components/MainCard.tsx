"use client";
import React, { useState } from 'react';
import { Container } from "@/components/Container";
import Image from "next/image";
import { totalData } from "@/components/mainData";
import { calculateInvestmentDetails } from '../components/InvestmentCalc';
import CustomGrid, { tab1Grid as Tab1Grid, tab2Grid as Tab2Grid } from '../components/tabGridView';
import FilterSection from '@/components/FilterSection';

export const MainCard: React.FC = () => {
  const [amountFilter, setAmountFilter] = useState<number | ''>(20);
  const [periodFilter, setPeriodFilter] = useState<number | ''>('');
  const [rateFilter, setRateFilter] = useState<number | ''>('');
  const [showMoreStates, setShowMoreStates] = useState<boolean[]>(new Array(totalData.length).fill(false));
  const [activeTabStates, setActiveTabStates] = useState<number[]>(new Array(totalData.length).fill(0));

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberValue = value === '' ? '' : Number(value);
    setAmountFilter(numberValue);
  };

  const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const numberValue = value === '' ? '' : Number(value);
    setPeriodFilter(numberValue);
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const numberValue = value === '' ? '' : Number(value);
    setRateFilter(numberValue);
  };

  const handleShowMoreToggle = (index: number) => {
    setShowMoreStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handleTabChange = (index: number, tabIndex: number) => {
    setActiveTabStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = tabIndex;
      return newStates;
    });
  };

  return (
    <Container>
      <FilterSection
        amountFilter={amountFilter}
        periodFilter={periodFilter}
        rateFilter={rateFilter}
        onAmountChange={handleAmountChange}
        onPreriodChange={handlePeriodChange}
        onRateChange={handleRateChange}
      />

      {/* Display filtered data */}
      <div className="flex flex-wrap justify-center gap-6">
        {totalData.map((item, index) => {
          const { InterestExpense, InvestmentPeriod, Produce } = calculateInvestmentDetails(amountFilter === '' ? 0 : amountFilter);
          const validProduce = Number.isInteger(Produce) ? Produce : 0;
          
          {/* For Back-End Dev? */}
          const shouldDisplay = periodFilter === '' || InvestmentPeriod <= periodFilter;

          return (
            shouldDisplay && (
              <div key={index} className="flex flex-col w-full justify-center my-6 bg-white border-s-white rounded-[20px] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] lg:w-[1200px] w-full mx-10 lg:mx-0 gap-6">
                <div className="flex justify-between items-center p-6">
                  <div>
                    <Image
                      src={item.image}
                      width={250}
                      height={50}
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col text-gray-500 justify-center items-center">
                    <p className="text-[22px] font-bold">
                      {InterestExpense.toFixed(2)}%
                    </p>
                    <p className="text-[18px] font-normal">
                      Zinssatz p. a.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center text-gray-500 items-center">
                    <p className="text-[22px] font-bold">
                      {Math.floor(validProduce)}€
                    </p>
                    <p className="text-[18px] font-normal">
                      Ertrag
                    </p>
                  </div>
                  <div className="flex flex-col justify-center text-gray-500 items-left">
                    <p className="text-[14px] font-normal">
                      {item.bullets[0]}
                    </p>
                    <p className="text-[14px] font-normal">
                      {item.bullets[1]}
                    </p>
                    <p className="text-[14px] font-normal">
                      {item.bullets[2]}
                    </p>
                  </div>

        
                  <button className="bg-[#004b8c] text-sm text-white rounded-lg h-14 px-4">
                    Zum Angebot<span className="ml-2">&gt;</span>
                  </button>
                </div>

                {/* Show More Button */}
                <div className="flex justify-center p-4 border-t">
                  <button onClick={() => handleShowMoreToggle(index)} className="flex items-center px-4 py-2 link-style-button">
                    <span>{showMoreStates[index] ? "Weniger Info" : "Mehr Info"}</span>
                    <span className={`ml-2 transition-transform ${showMoreStates[index] ? 'rotate-180' : 'rotate-0'}`}>˅</span>
                  </button>
                </div>

                {/* Additional Content with Tabs */}
                {showMoreStates[index] && (
                  <div className="p-4 border-t tab-content-view">
                    <div className="flex justify-left space-x-4 mb-4">
                      <button
                        onClick={() => handleTabChange(index, 0)}
                        className={`link-style-blue ${activeTabStates[index] === 0 ? 'font-bold' : ''}`}
                      >
                        Produktdetails
                      </button>
                      <button
                        onClick={() => handleTabChange(index, 1)}
                        className={`link-style-blue ${activeTabStates[index] === 1 ? 'font-bold' : ''}`}
                      >
                        Bewertung
                      </button>
                    </div>

                    {/* Tab Content */}
                    <div>
                      {activeTabStates[index] === 0 && (
                        <div>
                          <Tab1Grid />
                        </div>
                      )}
                      {activeTabStates[index] === 1 && (
                        <div>
                          <Tab2Grid />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          );
        })}
      </div>
    </Container>
  );
};
