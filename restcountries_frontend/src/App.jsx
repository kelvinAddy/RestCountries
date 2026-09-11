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

  useEffect(() => {
    axios
      .get('/countries/data')
      .then((res) => res.data)
      .then((data) => {
        setCountryData(data);
      })
      .catch((error) => {
        setErrorMessage(error.response);
      });
  }, []);

  if (errorMessage) return <ServerErrorPage errorMessage={errorMessage} />;
  if (!countryData) return;
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <CountryListPage
              countryData={countryData}
              setErrorMessage={setErrorMessage}
            />
          }
        />
        <Route
          path="/countries/:id"
          element={
            <CountryDetailsPage
              countryData={countryData}
              setErrorMessage={setErrorMessage}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
