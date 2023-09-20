/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Card = ({ country }) => {
  return (
    <Link
      to= {`/countries/${country?.name?.common ?? ""}`}
      state={country}
      style={{ textDecoration: "none" }}
    >
      <div className="shadow-md rounded pb-6 mb-6">
        <img className="w-64 h-44" src={country?.flags?.png ?? ""} />
        <h3 className="mt-6 font-semibold text-xl">{country?.name?.common ?? ""}</h3>
        <ul className="text-population">
          <li className="mt-2 mb-2 ">
            <span>Population: </span>
            {country?.population ?? ""}
          </li>
          <li className="mt-2 mb-2 ">
            <span>Region: </span>
            {country?.region ?? ""}
          </li>
          <li className="mt-2 mb-2 ">
            <span>Capital: </span>
            {country?.capital ?? ""}
          </li>
        </ul>
      </div>
    </Link>
  );
};
