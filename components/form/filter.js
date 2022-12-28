import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function MonthYearForm() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const link = `/events/${year}/${month}/`;
    router.push(link);
  };

  const monthNames = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Month:
        <select value={month} onChange={(event) => setMonth(event.target.value)}>
          {monthNames.map((name, index) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Year:
        <select value={year} onChange={(event) => setYear(event.target.value)}>
          {[2022, 2021, 2020, 2019, 2018].map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
