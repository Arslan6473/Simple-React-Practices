import axios from "axios";
const API_KEY = "7e3c55b2182c7bed4e070850c5230efe";

const iconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;
const getApiWeatherData = async (city, units) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const response = await axios.get(URL);
  const data = response.data;
  // console.log(data)

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const {  description, icon } = weather[0];

  return {
    description,
    iconURL:iconUrl(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    country,
    name,
    speed,
  };
};

export { getApiWeatherData };
