import "./App.css";
import { useState } from "react";
import React, { useEffect } from "react";
import SerchArea from "./MyComponents/SerchArea";
import { getApiWeatherData } from "./MyComponents/Apicall";

function App() {
  const [weather, setWeather] = useState([]);
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("bahawalpur");
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    
    const fetchdata = async () => {
      setLoding(true);
      const data = await getApiWeatherData(city, units);
      setWeather(data);
      setLoding(false);
    };
    fetchdata();
  }, [units, city]);

  return (
    <div className="App">
      <SerchArea
        weather={weather}
        units={units}
        setUnits={setUnits}
        setCity={setCity}
        loding={loding}
      ></SerchArea>
    </div>
  );
}

export default App;
