import { useState } from 'react';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [total, setTotal] = useState(0);

  const clearState = () => {
    setBillAmount('');
    setTipPercentage('');
    setTotal(0);
  };

  const handleTipCalculation = (e) => {
    e.preventDefault();
    const tip = tipPercentage / 100;
    setTotal(billAmount + tip * billAmount);
  };

  return (
    <div className="flex justify-center items-center ">
      <form
        className=" shadow-2xl w-auto p-8 rounded-md my-20 bg-white"
        onSubmit={handleTipCalculation}
      >
        <h2 className="text-center font-bold text-2xl pb-4">Tip Calculator</h2>
        <p>Enter the bill amount and tip percentage to calculate the total</p>
        <p className="text-sm my-1">Bill Amount:</p>
        <div>
          <input
            type="number"
            className="border border-black w-full mb-4 rounded-sm"
            value={billAmount}
            onChange={(e) => setBillAmount(Number(e.target.value))}
          />
          <p className="text-sm my-1">Tip Percentage:</p>
          <input
            type="number"
            className="border border-black w-full mt-1 rounded-sm"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(Number(e.target.value))}
          />
        </div>
        {!total && (
          <button
            type="submit"
            className="bg-green-500 w-full text-white mt-4 py-1 rounded-sm"
          >
            Calculate
          </button>
        )}
        {total > 0 && (
          <div>
            <div className="mt-4">
              Total : <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            <button
              type="submit"
              className="bg-red-500 w-full text-white mt-4 py-1 rounded-sm"
              onClick={clearState}
            >
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
export default TipCalculator;
