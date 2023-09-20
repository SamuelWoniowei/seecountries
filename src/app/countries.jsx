import { useEffect, useState } from "react";
import { Card } from "./components/card";
import { Header } from "./components/header";
import { CountriesLayout } from "./components/Layout/CountriesLayout";
import { useDarkMode } from "./DarkModeContext";


const Countries = () => {
  const [inputValue, setInputValue] = useState("");
  const [totalCountries, setTotalCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setTotalCountries(data);
        setFilteredCountries(data);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    const searchedCountries = totalCountries.filter((country) =>
      country?.name?.common.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredCountries(searchedCountries);
  };

  const handleSelectedRegion = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);

    const regionPicked = totalCountries.filter((country) =>
      country?.region.toLowerCase().includes(region.toLowerCase())
    );

    setFilteredCountries(regionPicked);
  };

  const { darkMode } = useDarkMode();

  return (
    <div className={`transition ${darkMode ? "dark" : ""}`}>
      <div className="bg-lightGrey dark:bg-darkBlueBg ">
        <Header />
        <div className="flex flex-col md:flex-row justify-between mt-6 md:mt-20 mb-14 px-6 md:px-16  ">
          <div className="shadow-lg pl-10 w-full h-14 gap-3 bg-white dark:bg-darkBlue md:w-1/3 rounded flex flex-row items-center">
            <label htmlFor="countryName">
              <ion-icon
                name="search"
                style={{ color: darkMode ? "white" : "" }}
              ></ion-icon>
            </label>

            <input
              type="text"
              id="countryName"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search for a country..."
              className="h-14 rounded focus:outline-none text-darkBlue  dark:bg-darkBlue dark:text-white w-full"
            />
          </div>
          <select
            value={selectedRegion}
            onChange={handleSelectedRegion}
            className="shadow-lg px-8 rounded h-14 focus:outline-none appearance-none  dark:bg-darkBlue dark:text-white mt-6 md:mt-0 font-light text-xs md:text-lg"
          >
            <option value="" disabled className="font-light">
              Filter by Region
            </option>
            <option value="">All regions</option>
            <option value={"africa"}>Africa</option>
            <option value={"america"}>America</option>
            <option value={"asia"}>Asia</option>
            <option value={"europe"}>Europe</option>
            <option value={"oceania"}>Oceania</option>
          </select>
        </div>

        <div className=" px-10">
          {loading ? (
            <div className="flex flex-row h-96 justify-center items-center ">
              <span className="text-xl">Loading...</span>
            </div>
          ) : (
            <CountriesLayout>
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <Card
                    key={country?.name?.common}
                    country={country}
                    darkMode={darkMode}
                  />
                ))
              ) : (
                <div>
                  <h2>No Country found</h2> <br />
                  <p>
                    Maybe <span className="text-darkBlue">{inputValue}</span> is
                    not a country{" "}
                  </p>
                </div>
              )}
            </CountriesLayout>
          )}
        </div>
      </div>
    </div>
  );
};

export default Countries;
