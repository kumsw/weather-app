import React, { useState } from "react";
import styles from "./DisplayForecast.module.css";
// import { motion, AnimatePresence } from "framer-motion";

function DisplayForecast({ forecastData, location }) {
  const [celsiusTemp, setCelsiusTemp] = useState(forecastData.main.temp);
  const [isClicked, setIsClicked] = useState(false);
  // toggle from farenheit to degrees

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
      {/* <motion.div
        className={styles.info}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, opacity: 1 }}
      > */}
      <h2> Today's weather</h2>
      <h3>Forecast for {location} </h3>
      <h3>
        {isClicked
          ? celsiusTemp + " celsius"
          : Math.round(forecastData?.main.temp) + "  farenheit"}
      </h3>
      <label className={styles.switch}>
        <input
          type="checkbox"
          onClick={() => handleClick(forecastData?.main.temp)}
        />
        <span className={styles.sliderRound}></span>
      </label>
      <h4>{forecastData.weather[0].description}</h4>
      <img
        src={`http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@4x.png`}
        alt={`icon showing a description of ${location}'s weather - ${forecastData.weather[0].description}`}
      />
      {/* </motion.div> */}
    </div>
  );
}

export default DisplayForecast;
