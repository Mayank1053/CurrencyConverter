import React, { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1.0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencies = Object.keys(currencyInfo);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const calculatedConvertedAmount = amount * currencyInfo[toCurrency];

  return (
    <div className="container mx-auto p-4 mt-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">
        Currency Converter
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center mb-2">
            <label htmlFor="amount" className="font-medium">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="ml-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center mb-2">
            <label htmlFor="fromCurrency" className="font-medium">
              From:
            </label>
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="ml-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              {currencies.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center mb-2">
            <label htmlFor="toCurrency" className="font-medium">
              To:
            </label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="ml-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              {currencies.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSwap}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            <ArrowLeftRight size={20} />
          </button>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">
              {amount} {fromCurrency} =
            </h2>
            <h3 className="text-3xl font-bold mb-2">
              {calculatedConvertedAmount} {toCurrency}
            </h3>
            <p className="text-sm text-gray-500">
              1 {fromCurrency} = {currencyInfo[toCurrency]} {toCurrency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
