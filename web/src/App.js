import logo from "./logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Weather() {
  // const [weatherData, setWeatherData] = useState(null);
  // const [cityName, setCityName] = useState("");

  // const submitHandler = (e) => {
  //   e.preventDefault();

    console.log("I am click handler");
    axios
      .get(
        `http://express-api.up.railway.app/`
      )
      .then((response) => {
        console.log("response: ", response.data);

        // setWeatherData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  // };

  return (
    <div>
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
    </div>
  );
}

export default Weather;