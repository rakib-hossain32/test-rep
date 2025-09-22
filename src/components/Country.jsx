import React, { useState } from "react";

const Country = ({ country }) => {
  const [visited, steVisited] = useState(false);

  const handleVisited = () => {
    // if(visited){
    //     steVisited(false)
    // }else{
    //     steVisited(true)
    // }
    // visited ? steVisited(false) : steVisited(true)
    steVisited(!visited);
  };

  console.log(country.area.area);
  return (
    <div
      className={`p-2 border rounded-2xl space-y-3 ${
        visited && "bg-pink-950 border border-pink-200"
      }`}
    >
      <img
        className="object-cover aspect-4/3 rounded-t-2xl w-full"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <h3 className="text-xl">
        Country Name:{" "}
        <span className="font-bold  text-pink-600">
          {country?.name?.common}
        </span>
      </h3>
      <p className="">
        Population:{" "}
        <span className="font-semibold">{country.population.population}</span>
      </p>
      <p className="">
        Region: <span className="font-semibold">{country.region.region}</span>
      </p>

      <p className="">
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>

      <button className="btn " onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
