import { useState, useRef, useEffect } from 'react';

const RegionFilter = ({ countryData, setRegionName, regionName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef(null);

  const handleDropdown = (region) => {
    setRegionName(region);
    setIsOpen(false);
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (isOpen && !dropDownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener('mousedown', closeDropdown);
    return () => document.body.removeEventListener('mousedown', closeDropdown);
  }, [isOpen]);

  const regionsEl = (
    <ul className="bg-white dark:bg-gray-900 z-20 px-6 py-4 w-full absolute left-0 top-full mt-2 rounded-md shadow-md">
      {[
        'All Countries',
        ...new Set(countryData.map((country) => country.region)),
      ].map((region) => (
        <li key={region}>
          <button
            type="button"
            className="w-full text-left py-1"
            onClick={() => handleDropdown(region)}
          >
            {region}
          </button>
        </li>
      ))}
    </ul>
  );

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      ref={dropDownRef}
      className="dark:bg-gray-900 dark:text-white w-64 py-5 px-6 rounded-md shadow-md relative flex justify-center items-center cursor-pointer"
    >
      <button className="cursor-inherit" onClick={handleButtonClick}>
        {!regionName ? 'Filter by Region' : regionName}
        <span className="ml-9">{!isOpen ? '▾' : '▴'}</span>
      </button>
      {isOpen && regionsEl}
    </div>
  );
};

export default RegionFilter;
