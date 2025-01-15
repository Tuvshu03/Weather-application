export const citiesFilter = (countries) => {
    const citiesAndCountries = countries.flatMap((country) => {
      return country.cities.map((city) => {
        return `${city}, ${country.country}`;
      });
    });
    return citiesAndCountries;
};


