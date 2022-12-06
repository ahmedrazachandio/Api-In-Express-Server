import React from 'react'

const Lahore = () => {
  return (
    // <div>Lahore</div>
    <div className="card">


    <div className="result_div">

      {/* <div className="img_div" >
        {/* <img src="//cdn.weatherapi.com/weather/64x64/night/113.png" alt="" id="weather_icon" /> */}
      {/* </div>  */}
      <div className="temp_result">
        <div id="tempC">{weatherData?.ftempC}°C</div>
        <div id="tempF">{Math.round(weatherData?.ftempF)}°F</div>
      </div>

    </div>
    <div className="sub">
      <div className="left">
        <div id="time">{new Date().toDateString()}</div>
        <div id="city_name">{cityName}</div>
        <div id="feels_like_c">Feels Like:{weatherData.ftempC}°C</div>
        <div id="humidity">Humidity:{weatherData.humidity}%</div>
        <div id="wind_speed_kph">Wind Speed:{weatherData.windKPH}KP/H</div>

      </div>

      <div className="right">
        <div id="last_update">{new Date().toDateString()}Last Update</div>
        <div id="weather_condition">{weatherData.text}</div>
        <div id="feels_like_f">Feels Like:{weatherData.ftempC}°F</div>
        <div id="visibility">Visibility{weatherData.visibility}KM</div>
        <div id="wind_speed_mph">Wind Speed:{weatherData.windMPH}MP/H</div>
      </div>
    </div>

  </div>
  )
}

export default Lahore