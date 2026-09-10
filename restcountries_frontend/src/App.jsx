import Header from './components/Header';
import CountryListPage from './pages/CountryListPage';
import CountryDetailsPage from './pages/CountryDetailsPage';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    axios
      .get('/countries/data')
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
          element={<CountryListPage countryData={countryData} />}
        />
        <Route
          path="/countries/:id"
          element={<CountryDetailsPage countryData={countryData} />}
        />
      </Routes>
    </>
  );
};

export default App;
