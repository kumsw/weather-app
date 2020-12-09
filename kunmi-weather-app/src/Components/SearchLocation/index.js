import React, { useState, useEffect } from "react";

const api = {
  key: "c7ca69e54d0f0b71a45cc52aeb01e4aa",
  base: "http://api.openweathermap.org/data/2.5/",
};

function SearchLocation() {
  const [forecastData, setForecastData] = useState();
  const [location, setLocation] = useState("Birmingham");

  useEffect(() => {
    async function getForecast() {
      const res = await fetch(
        `${api.base}weather?q=${location}&appid=${api.key}`
      );
      const data = await res.json();
      if (data) {
        setForecastData(data);
      }
    }
    if (location !== null) {
      getForecast();
    }
  }, [location]);

  function handleChange(event) {
    setLocation(event.target.value);
    console.log(location);
  }

  return (
    <div>
      <h2>Search by Location</h2>
      <h3>{forecastData?.name}</h3>
      <h4> {forecastData?.main?.temp}</h4>
      <input onChange={handleChange}></input>
      <button> search </button>
    </div>
  );
}

export default SearchLocation;

// this component will handle the search query and fetch the relevant data depending on the location chosen
