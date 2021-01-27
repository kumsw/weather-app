import React, { useState } from "react";
import styles from "./DisplayForecast.module.css";

function DisplayForecast({ forecastData, location }) {
  const [celsiusTemp, setCelsiusTemp] = useState();
  const [isClicked, setIsClicked] = useState(false);
  // toggle from farenheit to degrees

  function handleClick(farenheit) {
    console.log(farenheit);
    setIsClicked(!isClicked);
    if (isClicked) {
      const farToCel = Math.round(((farenheit - 32) * 5) / 9);
      setCelsiusTemp(farToCel);
      console.log(celsiusTemp);
    }
  }

  return (
    <div className={styles.forecastData}>
      <h4> Today's weather</h4>
      <h3>Forecast for {location} </h3>
      <h3>
        Temperature:
        {isClicked
          ? celsiusTemp + " celsius"
          : forecastData.main.temp + "  farenheit"}
      </h3>
      <label className={styles.switch}>
        toggle for celsius
        <input
          type="checkbox"
          onClick={() => handleClick(forecastData.main.temp)}
        />
        <span className={styles.sliderRound}></span>
      </label>
      <h3>Description: {forecastData.weather[0].description}</h3>
    </div>
  );
}

export default DisplayForecast;
