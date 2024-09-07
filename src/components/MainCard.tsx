"use client";
import React, { useState, useEffect } from 'react';
import { Container } from "@/components/Container";
import Image from "next/image";
import { totalData } from "@/components/mainData";
import { calculateInvestmentDetails } from '../components/InvestmentCalc';
import FilterSection from '@/components/FilterSection';
import ThreeQuarterCircle from '@/components/RateCircle';
import { Tab1Grid, Tab2Grid } from "@/components/BankDetailTemplate";
import { BankDetail, BankRating } from "@/components/BankDetailDataList";
import Checkmark from "@/components/SVG/CheckMark";
import * as SVG from "../components/SVG"

export const MainCard: React.FC = () => {
  const [amountFilter, setAmountFilter] = useState<number | ''>(10);
  const [periodFilter, setPeriodFilter] = useState<number | ''>(12);
  const [rateFilter, setRateFilter] = useState<number | ''>('');
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [showMoreStates, setShowMoreStates] = useState<boolean[]>(new Array(totalData.length).fill(false));
  const [activeTabStates, setActiveTabStates] = useState<number[]>(new Array(totalData.length).fill(0));
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const handleSelectChange1 = (event: any) => {
    setSelectedOption1(event.target.value);
  };
  const handleButtonClick = () => {
    console.log('++++++++++++++');
    setIsButtonClicked(true);
  };
  const handleButtonCose = () => {
    console.log('++++++++++++++');
    setIsButtonClicked(false);
  };
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

  // Initialize the circle rate view  random number, 35 same 0, in other words, standard is 35...
  const [preInterestExpense, setPreInterestExpense] = useState<number[]>([3.75, 3.56, 3.45, 3.40, 3.30, 3.75]);
  const [predefinedRateValues, setPredefinedRateValues] = useState<number[]>([1.1, 1.3, 1.6, 1.5, 2.2, 1.2]);

  useEffect(() => {
    if (rateFilter !== '') {
      setPredefinedRateValues(prevValues => {
        const newValues = [...prevValues];
        [newValues[0], newValues[4]] = [newValues[4], newValues[0]];
        return newValues;
      });
    }
  }, [rateFilter]);

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
            const inerestExpense = preInterestExpense[index % preInterestExpense.length];
            const {Produce}  = calculateInvestmentDetails(
            amountFilter === '' ? 0 : amountFilter,
            inerestExpense === '' ? 0 : inerestExpense,
            periodFilter === '' ? 0 : periodFilter
          );

          {/* For Back-End Dev? */ }
          const shouldDisplay = periodFilter === '' || (Produce !== undefined && Produce !== 0);
          const value = predefinedRateValues[index % predefinedRateValues.length];
          return (
            shouldDisplay && (
              <div key={index} className="flex flex-col w-full justify-center my-6 bg-white border-s-white rounded-[20px] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] lg:w-[1200px] mt-6 mx-10 lg:mx-0 gap-6">
                <div className="flex justify-between items-center p-6 relative">
                  <div className='w-[250px] h-[50px] p-5'>
                    <Image
                      src={item.image}
                      width={250}
                      height={50}
                      alt="logo"
                      className='w-full'
                    />
                  </div>
                  <div className="flex flex-col text-gray-500 justify-center items-center">
                    <p className="text-[22px] font-bold">
                       {inerestExpense.toFixed(2)}%
                    </p>
                    <p className="text-[18px] font-normal">
                      Zinssatz p. a.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center text-gray-500 items-center">
                    <p className="text-[22px] font-bold">
                       {Produce.toFixed(2)}€
                    </p>
                    <p className="text-[18px] font-normal">
                      Ertrag
                    </p>
                  </div>
                  <div className="flex flex-col justify-center text-gray-500 items-left">
                     <div className='flex flex-row space-x-4 items-center'>
                        <div className="flex flex-col justify-center text-gray-500 items-left">
                          {item.bullets.map((bullet, idx) => (
                            <div key={idx} className='flex flex-row space-x-4 items-center'>
                              <span className="text-[14px] font-normal">
                                <Checkmark size={20} color="#000" />
                              </span>
                              <span className={`bullets-content ${(idx === 0)||(idx === 1) ? 'highlight-bullet' : ''}`} style={{margin:'0px 0px 3px 2px'}}>
                                {bullet}
                              </span>
                            </div>
                          ))}
                        </div>
                    </div>    
                  </div>

                  <div>
                    <ThreeQuarterCircle value={value} />
                  </div>

                  <button className="bg-[#FFB100] text-sm text-white font-semibold rounded-lg h-14 px-4" onClick={handleButtonClick}>
                    Zum Angebot<span className="ml-2">&gt;</span>
                  </button>
                </div>

                {/* Show More Button */}
                <div className="flex justify-center p-4 border-t">
                 <button onClick={() => handleShowMoreToggle(index)} className="flex items-center px-4 py-2">
                    <span className = "show-more-button">{showMoreStates[index] ? "Weniger Info" : "Mehr Info"}</span>
                    <span className={`ml-2 transition-transform ${showMoreStates[index] ? 'rotate-180' : 'rotate-0'}`}>˅</span>
                  </button>
                </div>

                {/* Additional Content with Tabs */}
                {showMoreStates[index] && (
                  <div className="p-4 border-t tab-content-view">
                    <ul className="flex justify-left space-x-4 mb-4">
                      <li
                        onClick={() => handleTabChange(index, 0)}
                        className={`tab-detail-view cursor-pointer ${activeTabStates[index] === 0 ? 'border-b-4 border-blue-500 text-blue-500' : 'text-gray-500'
                          }`}
                      >
                        Produktdetails
                      </li>
                      <li
                        onClick={() => handleTabChange(index, 1)}
                        className={`tab-detail-view cursor-pointer ${activeTabStates[index] === 1 ? 'border-b-4 border-blue-500 text-blue-500' : 'text-gray-500'
                          }`}
                      >
                        Bewertung
                      </li>
                    </ul>

                    {/* Tab Content */}
                    <div>
                      {activeTabStates[index] === 0 && (
                        <div>
                          <BankDetail />
                        </div>
                      )}
                      {activeTabStates[index] === 1 && (
                        <div>
                          <BankRating />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          );
        })}

        {isButtonClicked && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg lg:w-[500px] h-[600px] bg-[#e2bc64] flex items-center justify-center z-20" style={{position:'fixed'}}>
              <div className='flex flex-col items-center justify-center gap-4'>
                <p className='text-lg text-white font-normal uppercase'>FORDERN Sie jetzt kostenlos und</p>
                <p className='text-lg font-normal text-white uppercase'>unverbindlich weitere Informationen an.</p>
                <div className="flex justify-between gap-4 w-full">
                  <select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className="w-1/2 h-10 rounded-lg px-4 bg-white border border-gray-300"
                  >
                    <option value="" disabled>
                      männlich/weiblich
                    </option>
                    <option value="option1">männlich</option>
                    <option value="option2">weiblich</option>
                  </select>
                  <select
                    value={selectedOption1}
                    onChange={handleSelectChange1}
                    className="w-1/2 h-10 rounded-lg px-4 bg-white border border-gray-300"
                  >
                    <option value="" disabled>
                      ---
                    </option>
                    <option value="option1">---</option>
                    <option value="option2">Dr.</option>
                    <option value="option3">Prof.</option>
                    <option value="option4">Prof.Dr</option>
                  </select>
                </div>
                <div className='flex justify-between gap-4'>
                  <input type='text' placeholder='Vorname' className='w-1/2 h-10 rounded-lg px-4' />
                  <input type='text' placeholder='Nachname' className='w-1/2 h-10 rounded-lg px-4' />
                </div>
                <input type='text' placeholder='StraBe/Nr' className='w-full h-10 rounded-lg px-4' />
                <div className='flex justify-between gap-4'>
                  <input type='text' placeholder='PLZ' className='w-1/2 h-10 rounded-lg px-4' />
                  <input type='text' placeholder='Ort' className='w-1/2 h-10 rounded-lg px-4' />
                </div>
                <div className='flex justify-between gap-4'>
                  <input type='text' placeholder='Email' className='w-1/2 h-10 rounded-lg px-4' />
                  <input type='text' placeholder='Telefon' className='w-1/2 h-10 rounded-lg px-4' />
                </div>
                <button className='bg-[#daad45] text-white font-semibold text-xl p-4 rounded-lg mt-6 hover:bg-[#f8c348]'>
                  Ja, jetzt kostenlos Infos anfordern.
                </button>
                <div className=' cursor-pointer w-5 h-5 absolute top-5 right-5' onClick={handleButtonCose}>
                  <SVG.Close />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};