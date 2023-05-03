import { useEffect, useState } from 'react';

const AgeCalculator = () => {
  const [DOB, setDOB] = useState('');
  const [currentDate] = useState(new Date(Date.now()));

  const normalizeDateValue = (d) => {
    const zeroIndexMonth = d.getMonth() + 1;
    const zeroIndexDay = d.getDay();

    const month = zeroIndexMonth.toString().padStart(2, '0');
    const day = zeroIndexDay.toString().padStart(2, '0');
    const year = d.getFullYear();

    console.log(month, day, year);
    return `${year}-${month}-${day}`;
  };

  const calculateAge = (e) => {
    e.preventDefault();

    console.log(DOB);
  };

  // const validateDate = () => {
  //   const maxDate = normalizeDateValue(currentDate);
  //   return new Date(maxDate) < new Date(DOB) ? maxDate : DOB;
  // };

  return (
    <div>
      <form>
        <p>Enter your date of birth:</p>
        <input
          type="date"
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
          max={normalizeDateValue(currentDate)}
        />
        <button type="submit" onClick={calculateAge}>
          Calculate Age
        </button>
      </form>
    </div>
  );
};
export default AgeCalculator;
