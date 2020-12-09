import React from "react";

function DisplayForecast({ forecastData, location, api }) {
  // toggle from farenheit to degrees

  return (
    <div>
      <h3>Forecast for {location} </h3>
      <h3>Temperature: {forecastData.main.temp}</h3>
      <h3>Description: {forecastData.weather[0].description}</h3>
    </div>
  );
}

export default DisplayForecast;
