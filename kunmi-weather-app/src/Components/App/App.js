import { useState, useEffect } from "react";
import "./App.css";
import DisplayForecast from "../DisplayForecast";
import Input from "../Input";

// const api = {
//   key: API_KEY,
//   base: BASE_URL,
// };

function App() {
  const [forecastData, setForecastData] = useState(null);
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

  return (
    <div className="App">
      <main>
        <h2>Search by Location</h2>
        <Input setLocation={setLocation} />
        {forecastData !== null ? (
          <DisplayForecast location={location} forecastData={forecastData} />
        ) : (
          <h4> loading .. </h4>
        )}
      </main>
    </div>
  );
}

export default App;

// extension ---> toggle dark mode if the sun has set in the region
