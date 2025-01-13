import React, { useEffect, useState } from "react";

const citiesFilter = (countries) => {
  const citiesAndCountries = countries.flatMap((country) => {
    return country.cities.map((city) => {
      return `${city}, ${country.country}`;
    });
  });
  return citiesAndCountries;
};

function App() {
  const [citiesSearch, setCitiesSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);

  const handleChange = (event) => {
    setCitiesSearch(event.target.value);
  };

  const fetchData = async () => {
    setLoading(true);
    await fetch(" https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((result) => {
        const citiesAndCountries = citiesFilter(result.data);

        setCities(citiesAndCountries);
        setFilteredData(citiesAndCountries);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const filterData = () =>
    setFilteredData(
      cities
        .filter((city) =>
          city.toLowerCase().startsWith(citiesSearch.toLowerCase())
        )
        .slice(0, 5)
    );

  useEffect(() => {
    console.log("useEffect fetch data worked");
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [citiesSearch]);

  return (
    <div class="__className_43d6c0 bg-[#F3F4F6]">
      
      <div>
        <input onChange={handleChange} placeholder="Search city"></input>
      </div>
      {loading && <p>loading...</p>}
      <div>
        {citiesSearch.length > 0 &&
          filteredData.map((country, index) => {
            return <div key={index}>{country}</div>;
          })}
      </div>
    </div>
  );
}

export default App;
