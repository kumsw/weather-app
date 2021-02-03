import React, { useState, useEffect } from "react";
import styles from "./DisplayForecast.module.css";

function DisplayForecast({ forecastData, location }) {
  const [celsiusTemp, setCelsiusTemp] = useState(forecastData.main.temp);
  const [isClicked, setIsClicked] = useState(false);
  // toggle from farenheit to degrees

  useEffect(() => {
    handleClick();
  }, [location]);

  function handleClick(farenheit) {
    setIsClicked(!isClicked);
    if (isClicked) {
      const farToCel = Math.round(((farenheit - 32) * 5) / 9);
      setCelsiusTemp(farToCel);
      console.log(celsiusTemp);
    }
  }

  return (
    <div className={styles.forecastData}>
      <h2> Today's weather</h2>
      <h3>Forecast for {location} </h3>
      <h3>
        {isClicked
          ? celsiusTemp + " celsius"
          : Math.round(forecastData.main.temp) + "  farenheit"}
      </h3>
      <label className={styles.switch}>
        <input
          type="checkbox"
          onClick={() => handleClick(forecastData.main.temp)}
        />
        <span className={styles.sliderRound}></span>
      </label>
      <h4>{forecastData.weather[0].description}</h4>
      <img
        src={`http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@4x.png`}
        alt={`icon showing a description of ${location}'s weather - ${forecastData.weather[0].description}`}
      />
    </div>
  );
}

export default DisplayForecast;
