import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [submit, setSubmit] = useState(false);
  const [forecast, setForecast] = useState(null);

  function getCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setSubmit(true);
    setForecast({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function searchCity(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
    return <h3>Loading...</h3>;
  }

  let form = (
    <form onSubmit={searchCity}>
      <input type="search" placeholder="Search for a city" onChange={getCity} />
      <button type="submit">Search</button>
    </form>
  );
  if (submit) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(forecast.temperature)}°C</li>
          <li>Description: {forecast.description}</li>
          <li>Humidity: {forecast.humidity}%</li>
          <li>Wind: {forecast.wind}km/h</li>
          <li>
            <img src={forecast.icon} alt={forecast.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
