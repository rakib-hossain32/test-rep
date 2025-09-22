import React, { use } from "react";
import Country from "./Country";

const Countries = ({ fetchCountries, children }) => {
  const countriesData = use(fetchCountries);
  const countries = countriesData.countries;
  console.log(children);
  // console.log(countries)
  return (
    <div>
      <h3 className="text-4xl text-center font-bold my-5">
        All Countries Name!! {countries.length}
      </h3>
      <div className="grid grid-cols-4 gap-5 p-5">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
