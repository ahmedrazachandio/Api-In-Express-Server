import logo from "./logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  // const [cityName, setCityName] = useState("");

  // const submitHandler = (e) => {
  //   e.preventDefault();

  // console.log("I am click handler");
  axios.get(
    `https://express-api.up.railway.app/weather`
  )
    .then((response) => {
      // console.log("response: ", response);

      setWeatherData(response);
      // console.log(response);
    })
    .catch((err) => {
      console.log("error: ", err);
    });
  // };

  return (
    <div>
      <nav className="nav-bar">
        <h1>Weather App</h1>
      </nav>
      {/* <form onSubmit={submitHandler}>
        City Name:
        <input
          type="text"
          placeholder="enter your city name"
          required
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
        <button type="submit">get weather</button>
      </form> */}
      <br />
      <br />
      <div className="card">


        <div className="result_div">

          {/* <div className="img_div" >
            {/* <img src="//cdn.weatherapi.com/weather/64x64/night/113.png" alt="" id="weather_icon" /> */}
          {/* </div>  */}
          <div className="temp_result">
            <div id="tempC">weatherData?.tempC)°C</div>
            <div id="tempF">{Math.round(weatherData?.tempF)}°F</div>
          </div>

        </div>

        <div className="sub">
          <div className="left">
            <div id="time">{new Date().toDateString()}</div>
            {/* <div id="city_name">{weatherData.city}</div> */}
            {/* <div id="feels_like_c">Feels Like:{weatherData.ftempC}°C</div> */}
            {/* <div id="humidity">Humidity:{weatherData.humidity}%</div> */}
            {/* <div id="wind_speed_kph">Wind Speed:{weatherData.windKPH}KP/H</div> */}

          </div>

          <div className="right">
            <div id="last_update">{new Date().toDateString()}Last Update</div>
            {/* <div id="weather_condition">{weatherData.text}</div> */}
            {/* <div id="feels_like_f">Feels Like:{weatherData.ftempC}°F</div> */}
            {/* <div id="visibility">Visibility{weatherData.visibility}KM</div> */}
            {/* <div id="wind_speed_mph">Wind Speed:{weatherData.windMPH}MP/H</div> */}
          </div>
        </div>

      </div>
    // </div>
  );
}

export default Weather;
