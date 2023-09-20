import { Link, useParams } from "react-router-dom";
import { Header } from "./components/header";
import { useDarkMode } from "./DarkModeContext";
import { useEffect, useState } from "react";

const ShowCountry = () => {
  const [countryDetail, setCountryDetail] = useState(null);
  const { param } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError ] = useState(null);

  console.log(countryDetail);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const isCountryCode = /^\d{3}$|^[A-Za-z]{3}$/.test(param);
        const apiUrl = isCountryCode
          ? `https://restcountries.com/v3.1/alpha/${param}`
          : `https://restcountries.com/v3.1/name/${param}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data[0]);
        setCountryDetail(data[0]);
        setIsLoading(false);

      } catch (error) {
        console.error("Fetch error:", error);
        setCountryDetail(null); 
        setError("Country not found");
        setIsLoading(false); 
      }
    };

    fetchData();
  }, [param]);


  const language = countryDetail?.languages;
  const currency = countryDetail?.currencies;


  const { darkMode } = useDarkMode();

  return (
    <div className={` transition ${darkMode ? "dark" : ""}`}>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : countryDetail ? (
        <div className="dark:bg-darkBlueBg pb-96">
          <Header />
          <div className="px-10 md:px-20 dark:text-white">
            <div className="flex flex-col md:flex-row">
              <Link
                className="shadow-lg border-lightGrey dark:bg-darkBlue font-light  py-3 px-4 w-2/4 md:w-40 md:px-10 mb-10 mt-16 rounded "
                to={'/'}
              >
                <span className="flex flex-row items-center gap-3">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                  <span>Back</span>
                </span>
              </Link>
            </div>
            <div className="mt-6 flex flex-col md:flex-row gap-16">
              <img
                className="w-full md:w-2/4 h-68"
                src={countryDetail?.flags?.png}
                alt="country flag"
              />

              <div className="flex flex-col justify-center w-full">
                <h1 className="text-3xl font-bold mb-4 text-left">
                  {countryDetail?.name?.common}
                </h1>
                <div className="flex flex-col md:flex-row justify-between 2xl:gap-14 2xl:justify-normal">
                  <ul className="text-sm">
                    <li className="mb-2">
                      <span>Native Name: </span>
                      <span className="dark:text-dimWhite">
                        {countryDetail?.name?.common}
                      </span>
                    </li>
                    <li className="mb-2">
                      <span>Population: </span>
                      <span className="dark:text-dimWhite">
                        {countryDetail?.population}
                      </span>
                    </li>
                    <li className="mb-2">
                      <span>Region: </span>
                      <span className="dark:text-dimWhite">
                        {countryDetail?.region}
                      </span>
                    </li>
                    <li className="mb-2">
                      <span>Sub Region: </span>
                      <span className="dark:text-dimWhite">
                        {countryDetail?.subregion}
                      </span>
                    </li>
                    <li className="mb-2">
                      <span>Capital: </span>
                      <span className="dark:text-dimWhite">
                        {countryDetail?.capital}
                      </span>
                    </li>
                  </ul>
                  <ul className="text-sm">
                    <li className="mb-2">
                      <span>Top Level Domain: </span>
                      <span className="dark:text-dimWhite">
                        {countryDetail?.name?.common}
                      </span>
                    </li>
                    <li className="max-w-xs ">
                      <span>Currencies: </span>
                      {Object.entries(currency || {}).map(
                        ([currencyCode, currencyInfo], index, array) => (
                          <span
                            key={currencyCode}
                            className="dark:text-dimWhite"
                          >
                            {currencyInfo.name}
                            {index < array.length - 1 ? ", " : ""}
                          </span>
                        )
                      )}
                    </li>
                    <li className="max-w-xs mt-2">
                      <span>Language: </span>
                      {Object.entries(language || {}).map(
                        ([code, name], index, array) => (
                          <span className="mb-2 dark:text-dimWhite" key={code}>
                            {name}
                            {index < array.length - 1 ? ", " : ""}
                          </span>
                        )
                      )}
                    </li>
                  </ul>
                </div>
                <div className="mt-1 md:mt-6 text-sm flex flex-row items-center gap-3">
                  <span>Border Countries: </span>
                  <div className="flex flex-row gap-3 mt-1 flex-wrap">
                    {countryDetail?.borders?.map((border) => (
                      <Link
                        to={`/countries/${border}`}
                        key={border}
                        style={{ textDecoration: "none" }}
                        className="border-2 border-lightGrey dark:border-none dark:shadow-md dark:bg-darkBlue px-6 py-1 shadow-sm"
                      >
                        {border}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      ) : null }
    </div>
  );
};

export default ShowCountry;
