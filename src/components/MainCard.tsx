"use client";
import React, { useState } from 'react';
import { Container } from "@/components/Container";
import Image from "next/image";
import { totalData } from "@/components/mainData";

export const MainCard = () => {
  // State to hold the filter values
  const [amountFilter, setAmountFilter] = useState<number | ''>('');
  const [priceFilter, setPriceFilter] = useState<number | ''>('');

  // State to control the visibility of additional items for each card
  const [showMoreStates, setShowMoreStates] = useState<boolean[]>(new Array(totalData.length).fill(false));

  // State to track the active tab for each card
  const [activeTabStates, setActiveTabStates] = useState<number[]>(new Array(totalData.length).fill(0));

  // Handle changes to the amount input box
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberValue = value === '' ? '' : Number(value);
    setAmountFilter(numberValue);
  };

  // Handle changes to the price dropdown
  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const numberValue = value === '' ? '' : Number(value);
    setPriceFilter(numberValue);
  };

  // Toggle the show more state for an individual item
  const handleShowMoreToggle = (index: number) => {
    setShowMoreStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  // Handle tab change
  const handleTabChange = (index: number, tabIndex: number) => {
    setActiveTabStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = tabIndex;
      return newStates;
    });
  };

  return (
    <Container>
      {/* Input boxes for filtering */}
      <div className="flex flex-col items-center my-6">
        <div className="flex gap-4 mb-4 items-center">
          <span>Anlagebetrag</span>
          <div className="flex items-center">
            <input
              type="number"
              value={amountFilter === '' ? '' : amountFilter}
              onChange={handleAmountChange}
              placeholder="Filter by amount"
              className="px-4 py-2 border rounded-lg"
            />
            <span className="ml-2 text-gray-500">Euro</span>
          </div>
          <span>Anlagedauer</span>
          <select
            value={priceFilter}
            onChange={handlePriceChange}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">12 Monate</option>
            <option value="100">18 Monate</option>
            <option value="200">24 Monate</option>
            <option value="300">36 Monate</option>
            <option value="400">48 Monate</option>
            <option value="500">60 Monate</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      {/* Display filtered data */}
      <div className="flex flex-wrap justify-center gap-6">
        {totalData.map((item, index) => {
          // Convert item.price to integer
          const price = parseInt(item.price.toString(), 10);

          // Adjusted price based on filter values
          const adjustedPrice = amountFilter === '' || item.percentage < amountFilter.toString()
            ? price
            : price * (amountFilter * 2);

          // Determine if the item should be displayed based on priceFilter
          const shouldDisplay = priceFilter === '' || price <= priceFilter;

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
                      {item.percentage}%
                    </p>
                    <p className="text-[18px] font-normal">
                      Zinsen p. a.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center text-gray-500 items-center">
                    <p className="text-[22px] font-bold">
                      {Math.floor(adjustedPrice)}€
                    </p>
                    <p className="text-[18px] font-normal">
                      Ertrag
                    </p>
                  </div>
                  <div className="flex flex-col justify-center text-gray-500 items-center">
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
                  <button 
                    onClick={() => handleShowMoreToggle(index)} 
                    className="flex items-center px-4 py-2 border rounded-lg bg-[#004b8c] text-white"
                  >
                    <span>{showMoreStates[index] ? "Weniger Info" : "Mehr Info"}</span>
                    <span className={`ml-2 transition-transform ${showMoreStates[index] ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                  </button>
                </div>

                {/* Additional Content with Tabs */}
                {showMoreStates[index] && (
                  <div className="p-4 border-t bg-gray-100">
                    <div className="flex justify-center space-x-4 mb-4">
                      <button
                        onClick={() => handleTabChange(index, 0)}
                        className={`px-4 py-2 border-b-2 ${activeTabStates[index] === 0 ? 'border-[#004b8c] text-[#004b8c]' : 'border-transparent text-gray-500'}`}
                      >
                        Produktdetails
                      </button>
                      <button
                        onClick={() => handleTabChange(index, 1)}
                        className={`px-4 py-2 border-b-2 ${activeTabStates[index] === 1 ? 'border-[#004b8c] text-[#004b8c]' : 'border-transparent text-gray-500'}`}
                      >
                        Bewertung
                      </button>
                    </div>

                    {/* Tab Content */}
                    <div>
                      {activeTabStates[index] === 0 && (
                        <div>
                          <p className="text-gray-700">
                            Content for Tab 1 of item {index + 1}. This section can contain specific information related to the first tab.
                          </p>
                        </div>
                      )}
                      {activeTabStates[index] === 1 && (
                        <div>
                          <p className="text-gray-700">
                            Content for Tab 2 of item {index + 1}. This section can contain specific information related to the second tab.
                          </p>
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
