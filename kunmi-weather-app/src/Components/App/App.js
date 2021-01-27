import { useState, useEffect } from "react";
import styles from "./App.module.css";
import DisplayForecast from "../DisplayForecast";
import Input from "../Input";
// process.env.REACT_APP_API_KEY
const api = {
  key: "005dd360cef1e74a202e60ea8db6ff17",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [forecastData, setForecastData] = useState(null);
  const [location, setLocation] = useState("Birmingham");

  useEffect(() => {
    async function getForecast() {
      const res = await fetch(
        `${api.base}weather?q=${location}&units=imperial&appid=${api.key}`
      );
      const data = await res.json();
      if (data) {
        console.log(data);
        setForecastData(data);
      }
    }
    if (location !== null) {
      getForecast();
    }
  }, [location]);

  return (
    <div className={styles.App}>
      <main className={styles.container}>
        <h2 className={styles.header}>Search by Location</h2>
        <Input setLocation={setLocation} />
        <section className={styles.info}>
          {forecastData?.cod === 200 ? (
            <div>
              <DisplayForecast
                location={location}
                forecastData={forecastData}
              />
            </div>
          ) : (
            <h4> {forecastData?.message} </h4>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
