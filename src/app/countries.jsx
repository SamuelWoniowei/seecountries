import { useEffect, useState } from "react";
import { Card } from "./components/card";
import { Header } from "./components/header";
import { CountriesLayout } from "./components/Layout/CountriesLayout";

const Countries = () => {
  const [inputValue, setInputValue] = useState("");
  const [totalCountries, setTotalCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setTotalCountries(data);
        setFilteredCountries(data);
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

  return (
    <div>
      <Header />
      <div className="">
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search for a country..."
          />
          <select value={selectedRegion} onChange={handleSelectedRegion}>
            <option value="">All regions</option>
            <option value={"africa"}>Africa</option>
            <option value={"america"}>America</option>
            <option value={"asia"}>Asia</option>
            <option value={"europe"}>Europe</option>
            <option value={"oceania"}>Oceania</option>
          </select>
        </div>

        <CountriesLayout>
          {filteredCountries.map((country) => (
            <Card
              key={country?.name?.common}
              country={country}
            />
          ))}
        </CountriesLayout>
      </div>
    </div>
  );
};

export default Countries;
