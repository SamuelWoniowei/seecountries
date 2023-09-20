/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Card = ({ country }) => {
  return (
    <Link
      to={`/countries/${country?.name?.common}`}
      style={{ textDecoration: "none" }}
      className={`w-full md:w-1/4 2xl:w-96 px-6 2xl:px-10 mb-16 transition `}
    >
      <div className={`shadow-md  rounded pb-6 dark:bg-darkBlue`}>
        <img
          className="w-full h-44 rounded-t shadow-sm"
          src={country?.flags?.png ?? ""}
          alt="Country flag"
        />
        <div className="px-6">
          <h3 className="mt-6 font-semibold text-xl dark:text-white ">
            {country?.name?.common ?? ""}
          </h3>
          <ul className="text-population dark:text-white">
            <li className="mt-2 mb-1 ">
              <span className="text-sm font-semibold">Population: </span>
              <span className="dark:text-dimWhite text-sm font-light">{country?.population ?? ""}</span>
            </li>
            <li className="mb-1 ">
              <span className="text-sm font-semibold">Region: </span>
              <span className="dark:text-dimWhite text-sm font-light">{country?.region ?? ""}</span>
            </li>
            <li className="">
              <span className="text-sm font-semibold">Capital: </span>
              <span className="dark:text-dimWhite text-sm font-light">{country?.capital ?? ""}</span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
