import { useState, useEffect } from "react";

const RegionFilter = ({ countryData, updateCountries, setUpdateCountries, setCountriesToRender, setFilterData, searchData }) => {
  const [filterResults, setFilterResults] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  const [regionName, setRegionName] = useState(null);

  useEffect(() => {
    if (updateCountries) {
      const data = searchData ? filterResults.filter((country) => country.name.toLowerCase().includes(searchData.toLowerCase())) : filterResults;
      console.log(data, searchData);
      setCountriesToRender(data);
      setFilterData(filterResults);
    }
  }, [regionName]);

  const handleDropdown = (e) => {
    if (e.target.tagName === "LI" && e.target.textContent) {
      setRegionName(e.target.textContent);
      getFilteredRegions(e);
      setisOpen(null);
      setUpdateCountries(true);
    }
  };

  const getFilteredRegions = (e) => {
    setFilterResults(countryData.filter((country) => country.region === e.target.textContent));
  };

  const regionsEl = (
    <ul className="bg-white dark:bg-gray-900 z-20 px-6 py-4 w-full absolute left-0 top-full mt-2 rounded-md shadow-md">
      {[...new Set(countryData.map((country) => country.region))].map((region) => (
        <li key={region} className="py-1">
          {region}
        </li>
      ))}
    </ul>
  );

  const handleButtonClick = () => {
    setisOpen(!isOpen);
  };
  return (
    <div onClick={handleDropdown} className="dark:bg-gray-900 dark:text-white w-64 py-5 px-6 rounded-md shadow-md relative flex justify-center items-center cursor-pointer">
      <button className="cursor-inherit" onClick={handleButtonClick}>
        {!regionName ? "Filter by Region" : regionName}
        <span className="ml-9">{!isOpen ? "▾" : "▴"}</span>
      </button>

      {isOpen && regionsEl}
    </div>
  );
};

export default RegionFilter;
