import { citiesFilter } from "./Filter";
import React, { useState, useEffect } from "react";

const Search = (props) => {
  const  {setSelectedCity} = props
  const [citiesSearch, setCitiesSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
console.log(loading, 'loading');


  const handleChange = (event) => {
    setCitiesSearch(event.target.value);
    setFilteredData(
      cities
        .filter((city) =>
          city.toLowerCase().startsWith(event.target.value.toLowerCase())
        )
        .slice(0, 5)
    );
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        " https://countriesnow.space/api/v0.1/countries"
      );
      const result = await response.json();
      const citiesAndCountry = citiesFilter(result.data)
      setCities(citiesAndCountry);
      setFilteredData(citiesAndCountry);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("useEffect fetch data worked");
    fetchData();
  }, []);

  const handleCityClick = (city) => {
    setSelectedCity(city.split(",")[0])
  }



  return (
    <div className="absolute right-[70px] w-full -top-16 z-30">
        <div className=" rounded-full align-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <g opacity="0.2">
          <path
            d="M31.51 28.51H29.93L29.37 27.97C31.33 25.69 32.51 22.73 32.51 19.51C32.51 12.33 26.69 6.51001 19.51 6.51001C12.33 6.51001 6.51001 12.33 6.51001 19.51C6.51001 26.69 12.33 32.51 19.51 32.51C22.73 32.51 25.69 31.33 27.97 29.37L28.51 29.93V31.51L38.51 41.49L41.49 38.51L31.51 28.51ZM19.51 28.51C14.53 28.51 10.51 24.49 10.51 19.51C10.51 14.53 14.53 10.51 19.51 10.51C24.49 10.51 28.51 14.53 28.51 19.51C28.51 24.49 24.49 28.51 19.51 28.51Z"
            fill="black"
          />
        </g>
      </svg>
      <div>
        <input
          disabled={loading}
          onChange={handleChange}
          placeholder="Search"
          className="w-full py-4 pl-20 pr-6 outline-none text-[32px] font-bold"
          value={citiesSearch}
        ></input>
      </div>
      {loading && <p>loading...</p>}
      <div>
        {citiesSearch.length > 0 &&
          filteredData.map((city, index) => {
            return <div onClick={()=>handleCityClick(city)} key={index}>{city}</div>;
          })}
      </div>
    </div>
    </div>
    
  );
};
export default Search;
