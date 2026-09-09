import Header from "./components/Header";
import RegionFilter from "./components/RegionFilter";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import { Routes, Route, useMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countryData, setCountryData] = useState(null);
  const [countriesToRender, setCountriesToRender] = useState([]);
  const [updateCountries, setUpdateCountries] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const match = useMatch("/countries/:id");
  const matchedCountry = match ? countryData.find((country) => country.name === match.params.id) : null;

  const getBorderCountries = (borderArray) => {
    return borderArray.map((borderCountry) => countryData.find((data) => data.alpha3Code === borderCountry).name);
  };

  useEffect(() => {
    axios
      .get("countries/data")
      .then((res) => res.data)
      .then((data) => {
        setCountryData(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  if (!countryData) return;
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main className="mx-5 mb-10">
              <div className="flex flex-col gap-y-10 sm:flex-row sm:justify-between mb-4">
                <SearchBar countryData={countryData} setCountriesToRender={setCountriesToRender} updateCountries={updateCountries} filterData={filterData} setSearchData={setSearchData} />
                <RegionFilter
                  countryData={countryData}
                  setCountriesToRender={setCountriesToRender}
                  updateCountries={updateCountries}
                  setUpdateCountries={setUpdateCountries}
                  setFilterData={setFilterData}
                  searchData={searchData}
                />
              </div>
              <CountryList
                countryData={countryData}
                countriesToRender={countriesToRender}
                setCountriesToRender={setCountriesToRender}
                updateCountries={updateCountries}
                setUpdateCountries={setUpdateCountries}
              />
            </main>
          }
        />
        <Route path="/countries/:id" element={<CountryDetailsPage country={matchedCountry} getBorderCountries={getBorderCountries} />} />
      </Routes>
    </>
  );
};

export default App;
