import logo from "./logo.svg";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import Karachi from "./components/Karachi";
import Lahore from "./components/Lahore";
import Haiderabad from "./components/haiderabad";

function Weather() {
  // const [weatherData, setWeatherData] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    var inputValue = document.getElementById('cityName').value;
    setCityName(inputValue)
    console.log(inputValue);

  console.log("I am click handler");
  axios.get(
    `https://express-api.up.railway.app/weather`
  )
    .then((response) => {
      console.log("response: ", response.data);

      setWeatherData(response.data);
      console.log(weatherData);
    })
    .catch((err) => {
      console.log("error: ", err);
    });
  };

  return (
    <div>
      <nav className="nav-bar">
        <h1>Weather App</h1>
      </nav>
       <form onSubmit={submitHandler}> 
        City Name:
        <input
          type="text"
          id="cityName"
          // value=""
          placeholder="enter your city name"
          required
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
        <button type="submit">get weather</button>
      </form> 
      <br />
      <br />
          {
            (inputValue === "karachi" || inputValue === "haiderbad" || inputValue === "lahore") {
              if (nputValue === "karachi") {
                <Karachi />
              }else{
                if (inputValue === "haiderbad") {
                  <Haiderabad />
                  
                } else {
                  if (inputValue === "lahore") {
                    <Lahore />   
                  }
                  
                }
              }

            }else {
              console.log("your city is not found")
              
            }
          }
          
      <Karachi />
      <Lahore />
      <Haiderabad />
     
    // </div>
  );
}

export default Weather;
