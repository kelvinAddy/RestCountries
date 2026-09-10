import SearchBar from '../components/SearchBar';
import RegionFilter from '../components/RegionFilter';
import CountryList from '../components/CountryList';
import { useState } from 'react';

const CountryListPage = ({ countryData }) => {
  const [query, setQuery] = useState('');
  const [regionName, setRegionName] = useState(null);

  const countriesToRender = countryData.filter((data) => {
    const searchResults = data.name.toLowerCase().includes(query.toLowerCase());
    const hasFiltered =
      regionName === null ||
      regionName === data.region ||
      regionName === 'All Countries';

    return searchResults && hasFiltered;
  });
  return (
    <main className="mx-5 mb-10">
      <div className="flex flex-col gap-y-10 sm:flex-row sm:justify-between mb-4">
        <SearchBar setQuery={setQuery} query={query} />
        <RegionFilter
          regionName={regionName}
          setRegionName={setRegionName}
          countryData={countryData}
        />
      </div>
      <CountryList
        countriesToRender={countriesToRender}
        setQuery={setQuery}
        setRegionName={setRegionName}
      />
    </main>
  );
};

export default CountryListPage;
