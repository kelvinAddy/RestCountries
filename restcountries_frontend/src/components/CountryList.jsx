import { Link } from 'react-router-dom';
import EmptySearch from './EmptySearch';

const FlagImage = (props) => (
  <img
    className="w-full h-3/5 object-cover rounded-t-md"
    loading="lazy"
    src={`${props.flags?.png}`}
    alt={`Flag of ${props.name}`}
  />
);

const CountryDetails = (props) => {
  return (
    <div className="ml-6 mb-12 mt-5 text-gray-900 dark:text-white">
      <h2 className="text-lg font-extrabold  mb-2"> {props.name}</h2>
      <div>
        <p>
          <span className="font-semibold text-sm">Population:</span>
          <span className="font-light text-sm">
            {' '}
            {props.population ?? 'Unknown'}
          </span>
        </p>
        <p>
          <span className="font-semibold text-sm">Region:</span>
          <span className="font-light text-sm">
            {' '}
            {props.region ?? 'Unknown'}
          </span>
        </p>
        <p>
          <span className="font-semibold text-sm">Capital:</span>
          <span className="font-light text-sm">
            {' '}
            {props.capital ?? 'Unknown'}
          </span>
        </p>
      </div>
    </div>
  );
};

const CountryCard = ({ country }) => {
  return (
    <div className="rounded-md shadow-md w-80 h-96 dark:bg-gray-900 flex flex-col">
      <FlagImage flags={country.flags} />
      <CountryDetails
        name={country.name}
        capital={country.capital}
        region={country.region}
        population={country.population}
      />
    </div>
  );
};

const CountryList = ({
  countriesToRender,
  setRegionName,
  setQuery,
  isLoading,
}) => {
  if (countriesToRender.length === 0) {
    return <EmptySearch setRegionName={setRegionName} setQuery={setQuery} />;
  }
  return (
    <div className="flex flex-col gap-10 justify-center items-center sm:flex-row sm:flex-wrap ">
      {isLoading
        ? countriesToRender
        : countriesToRender.map((country) => (
            <Link key={country.name} to={`/countries/${country.name}`}>
              <CountryCard country={country} key={country.name} />
            </Link>
          ))}
    </div>
  );
};

export default CountryList;
