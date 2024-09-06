// Modified Date: 9/3/2024
// Coder: Jansper & GPT

import React from 'react';

interface FilterSectionProps {
  amountFilter: number | '';
  periodFilter: number | '';
  rateFilter: number | '';
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPreriodChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onRateChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  amountFilter,
  periodFilter,
  rateFilter,
  onAmountChange,
  onPreriodChange,
  onRateChange
}) => {
  return (
    <div className = "flex justify-center my-6">
      <div className = "bg-white border-s-white rounded-[20px] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] lg:w-[1200px] w-full px-6 py-4">
        <div className = "flex flex-wrap gap-6">
          {/* Anlagebetrag (Amount) */}
          <div className = "flex flex-col items-start flex-1">
            <span className = "mb-2 filter-header">Anlagebetrag</span>
            <div className = "flex items-center gap-2 filter-value-input" style = {{ width: '100%' }}>
              <input
                type = "number"
                value = {amountFilter === '' ? '' : amountFilter}
                onChange = {onAmountChange}
                placeholder = "Filter by amount"
                className = "px-4 py-2 border rounded-lg amount-currency-input"
                style = {{ width: '100%' }}
              />
              <div className = "text-gray-500 amount-currency">Euro</div>
            </div>
          </div>
          
          {/* Anlagedauer (Duration) */}
          <div className = "flex flex-col items-start flex-1">
            <span className = "mb-2 filter-header">Anlagedauer</span>
            <select
              value = {periodFilter}
              onChange = {onPreriodChange}
              className = "px-4 py-2 border rounded-lg filter-value-input"
              style = {{ width: '100%' }}
            >
              <option value = "">12 Monate</option>
              <option value = "100">18 Monate</option>
              <option value = "200">24 Monate</option>
              <option value = "300">36 Monate</option>
              <option value = "400">48 Monate</option>
              <option value = "500">60 Monate</option>
            </select>
          </div>

          {/* Sortieren nach (Sort By) */}
          <div className="flex flex-1 items-center justify-end">
            <span className="mr-2 filter-header">Sortieren nach:</span>
            <select
              value={rateFilter}
              onChange={onRateChange}
              className="filter-by-rate px-4 py-2 border rounded-lg"
              style={{ width: '100px' }}
            >
              <option value="">Zinssatz</option>
              <option value="1">Note</option> {/* Adjust values as needed */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
