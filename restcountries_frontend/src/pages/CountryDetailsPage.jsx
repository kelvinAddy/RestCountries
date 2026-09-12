import { Link } from 'react-router-dom';
import { useMatch, useNavigate } from 'react-router-dom';
import PageNotFound from './PageNotFound';

const CountryDetailsPage = ({ countryData }) => {
  const navigate = useNavigate();
  const match = useMatch(`/countries/:id`);
  const matchedCountry = countryData.find(
    (country) => country.name.toLowerCase() === match.params.id.toLowerCase(),
  );

  const getBorderCountries = (borderArray) => {
    return borderArray.map(
      (borderCountry) =>
        countryData.find((data) => data.alpha3Code === borderCountry).name,
    );
  };

  if (!matchedCountry) return <PageNotFound />;
  return (
    <section className="flex flex-col justify-center items-center dark:text-white">
      <div className="w-12/13">
        <button
          onClick={() => navigate(-1)}
          className="dark:bg-gray-900 flex gap-x-2 items-center rounded-md shadow-md px-6 py-2 w-max cursor-pointer"
        >
          <svg
            className="dark:fill-white fill-black"
            width="17"
            height="11"
            viewBox="0 0 17 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.30337 -2.63751e-05L6.36403 1.06063L2.86385 4.56081H16.2282L16.2282 6.04574H2.86385L6.36403 9.54592L5.30337 10.6066L7.03335e-05 5.30327L5.30337 -2.63751e-05Z"
            />
          </svg>
          <span>Back</span>
        </button>
        <div className="mb-8 flex flex-col gap-y-12 lg:flex-row lg:gap-x-20 lg:items-center">
          <div className="mt-16 lg:w-180">
            <img
              className="w-full object-cover rounded-sm"
              src={matchedCountry.flags?.svg}
              alt={`Flag of ${matchedCountry.name}`}
            />
          </div>
          <div>
            <h1 className="font-extrabold text-2xl">{matchedCountry.name}</h1>
            <div className="mt-4 flex flex-col gap-y-8 sm:flex-row sm:justify-between lg:gap-x-30 lg:justify-normal">
              <div>
                <p>
                  <span className="font-semibold text-sm">Native name: </span>
                  <span className="font-light text-sm">
                    {matchedCountry.nativeName ?? 'Unkown'}
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-sm">Population: </span>
                  <span className="font-light text-sm">
                    {matchedCountry.population ?? 'Unkown'}
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-sm">Region: </span>
                  <span className="font-light text-sm">
                    {matchedCountry.region ?? 'Unkown'}
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-sm">Sub Region: </span>
                  <span className="font-light text-sm">
                    {matchedCountry.subregion ?? 'Unkown'}
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-sm">Capital: </span>
                  <span className="font-light text-sm">
                    {matchedCountry.capital ?? 'Unkown'}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold text-sm">
                    Top Level Domain:{' '}
                  </span>
                  <span className="font-light text-sm">
                    {matchedCountry.topLevelDomain ?? 'Unkown'}
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-sm">Currencies: </span>
                  <span className="font-light text-sm">
                    {matchedCountry.currencies?.[0]?.name ?? 'Unkown'}
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-sm">Languages: </span>
                  <span className="font-light text-sm">
                    {matchedCountry.languages
                      .map((lang) => lang.nativeName)
                      .join(', ')}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-8 mb-8">
              <h3 className="font-semibold mb-4">Border Countries:</h3>
              <div className="flex flex-wrap gap-2">
                {matchedCountry.borders ? (
                  getBorderCountries(matchedCountry.borders).map((data) => {
                    return (
                      <Link
                        key={data}
                        className="dark:bg-gray-900 rounded-sm text-xs font-light shadow-md px-2 py-1"
                        to={`/countries/${data}`}
                      >
                        {data}
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs font-light">Country has no borders</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetailsPage;
