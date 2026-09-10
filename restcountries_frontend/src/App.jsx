import Header from './components/Header';
import CountryListPage from './pages/CountryListPage';
import CountryDetailsPage from './pages/CountryDetailsPage';
import ErrorPage from './pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countryData, setCountryData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get('/countries/data')
      .then((res) => res.data)
      .then((data) => {
        setCountryData(data);
      })
      .catch((error) => setErrorMessage(error.response));
  }, []);

  if (!countryData) return;
  if (!errorMessage) {
    return (
      <ErrorPage
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    );
  }
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
