import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CountryList = ({ countryData, countriesToRender, setCountriesToRender }) => {
  useEffect(() => {
    setCountriesToRender(countryData);
  }, []);
  return (
    <div className="flex flex-col gap-10 justify-center items-center sm:flex-row sm:flex-wrap ">
      {countriesToRender.map((country) => (
        <Link key={country.name} to={`/countries/${country.name}`}>
          <CountryCard country={country} key={country.name} />
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
