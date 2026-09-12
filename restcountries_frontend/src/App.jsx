import Header from './components/Header';
import CountryListPage from './pages/CountryListPage';
import CountryDetailsPage from './pages/CountryDetailsPage';
import ServerErrorPage from './pages/ServerErrorPage';
import PageNotFound from './pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countryData, setCountryData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/countries')
      .then((res) => res.data)
      .then((data) => {
        setCountryData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error);
        setIsLoading(false);
      });
  }, []);

  if (errorMessage) return <ServerErrorPage errorMessage={errorMessage} />;
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <CountryListPage countryData={countryData} isLoading={isLoading} />
          }
        />
        <Route
          path="/countries/:id"
          element={
            <CountryDetailsPage
              countryData={countryData}
              isLoading={isLoading}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
