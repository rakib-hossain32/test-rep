import React, { use, useState } from "react";
import Country from "./Country";

const Countries = ({ fetchCountries }) => {
  const countriesData = use(fetchCountries);
  const countries = countriesData.countries;

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("Clicked visited country", country);

    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedFlags = (flag) => {
    console.log("clicked add flags" ,flag);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };
  // console.log(children);
  // console.log(countries)
  return (
    <div>
      <h3 className="text-4xl text-center font-bold my-5">
        All Countries Name!! {countries.length}
      </h3>
      <h1 className="text-4xl text-center font-bold my-5">
        Total Country Visited : {visitedCountries.length}
      </h1>
      <ol>
        {visitedCountries.map((country) => (
          <li className=" list-decimal list-inside  ">
            {country?.name?.common}
          </li>
        ))}
      </ol>

      <div className=" grid grid-cols-4 gap-5 max-w-[550px]">
        {
          visitedFlags.map((flag,index) =>  
            <img key={index} src={flag} alt="" className="" />
           )
        }
      </div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
