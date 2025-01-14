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
    <div className="bg-[#F3F4F6]">
      <div className=" flex rounded-full">
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
            onChange={handleChange}
            placeholder="Search"
            className="w-full py-4 pl-20 pr-6 outline-none text-[32px] font-bold"
          ></input>
        </div>
        {loading && <p>loading...</p>}
        <div>
          {citiesSearch.length > 0 &&
            filteredData.map((country, index) => {
              return <div key={index}>{country}</div>;
            })}
        </div>
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[1740px] h-[1740px] "></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[1340px] h-[1340px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[940px] h-[940px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[5400px] h-[540px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[340px] h-[340px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[140px] h-[140px]"></div>
        <div className="flex items-center justify-center w-[140px] h-[140px] bg-[#F3F4F6] rounded-full gap-x-4">
          {/* <div className="relative">
            <div className="before:absolute before:-top-[114px] before:left-[67px] before:w-10 before:h-14 before:bg-[#F3F4F6]">
              ::before
            </div>
            <div className="after:absolute after:-top-[117px] after:left-[67px] after:w-20 after:h-16 after:bg-[#0F141E] after:rounded-bl-full">
              ::after
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex min-h-screen">
        <section className="relative flex flex-1 items-center justify-center">
          <div className="relative flex w-[567px] justify-center z-10">
            {/* <div className="absolute right-[70px] w-full -top-16 z-30"></div> */}
            <div className="z-20 w-103 h-207 rounded-10.5 overflow-hidden shadow-lg bg-white/75">
              <div className="space-y-12 px-10 py-14 backdrop-blur-lg">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <h4 className="text-gray-400">{}january 14, 2025</h4>
                    <h2 className="h-12 text-5xl font-extrabold text-gray-900">
                      {}Ulanbaatar
                    </h2>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g opacity="0.2">
                      <path
                        d="M20 3.33334C13.55 3.33334 8.33331 8.55001 8.33331 15C8.33331 23.75 20 36.6667 20 36.6667C20 36.6667 31.6666 23.75 31.6666 15C31.6666 8.55001 26.45 3.33334 20 3.33334ZM11.6666 15C11.6666 10.4 15.4 6.66668 20 6.66668C24.6 6.66668 28.3333 10.4 28.3333 15C28.3333 19.8 23.5333 26.9833 20 31.4667C16.5333 27.0167 11.6666 19.75 11.6666 15Z"
                        fill="black"
                      />
                      <path
                        d="M20 19.1667C22.3012 19.1667 24.1666 17.3012 24.1666 15C24.1666 12.6988 22.3012 10.8333 20 10.8333C17.6988 10.8333 15.8333 12.6988 15.8333 15C15.8333 17.3012 17.6988 19.1667 20 19.1667Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <img src=""/>
                </div>
              </div>
              <div className="px-12">
                <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
                  {}-16.9°
                </div>
                <h6
                  className="font-extrabold mb-12 h-6px"  
                  // style={"color: rgb(119, 124, 206)"}
                >
                  {}sunny
                </h6>
              </div>
            </div>
          </div>
        </section>
        <section className="relative flex flex-1 items-center justify-center">
          <div className="relative flex w-[567px] justify-center z-10">
            <div className="absolute right-[70px] w-full -top-16 z-30"></div>
            <div className="z-20 w-103 h-207 rounded-10.5 overflow-hidden shadow-lg bg-[#111827]/75">
              <div className="space-y-12 px-10 py-14 backdrop-blur-lg">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <h4 className="text-gray-400">{}january 14, 2025</h4>
                    <h2 className="h-12 text-5xl font-extrabold text-gray-900">
                      {}Ulanbaatar
                    </h2>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g opacity="0.2">
                      <path
                        d="M20 3.33334C13.55 3.33334 8.33331 8.55001 8.33331 15C8.33331 23.75 20 36.6667 20 36.6667C20 36.6667 31.6666 23.75 31.6666 15C31.6666 8.55001 26.45 3.33334 20 3.33334ZM11.6666 15C11.6666 10.4 15.4 6.66668 20 6.66668C24.6 6.66668 28.3333 10.4 28.3333 15C28.3333 19.8 23.5333 26.9833 20 31.4667C16.5333 27.0167 11.6666 19.75 11.6666 15Z"
                        fill="black"
                      />
                      <path
                        d="M20 19.1667C22.3012 19.1667 24.1666 17.3012 24.1666 15C24.1666 12.6988 22.3012 10.8333 20 10.8333C17.6988 10.8333 15.8333 12.6988 15.8333 15C15.8333 17.3012 17.6988 19.1667 20 19.1667Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="px-12">
                <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
                  {}-16.9°
                </div>
                <h6
                  className="font-extrabold mb-12 h-6px"  
                  // style={"color: rgb(119, 124, 206)"}
                >
                  {}sunny
                </h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
