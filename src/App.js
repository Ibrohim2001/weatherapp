import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

import "./App.css";
import Today from "./components/today/Today";
import Hourly from "./components/hour/Hourly";

function App(props) {
  // const KEY = "1690ecd304e4cd392179dcf6dd2a3a99";
  const KEY = "e7091047cd8746f2b92164257221906";

  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");
  // const current = new Date()
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
  const [today, setToday] = useState(true);
  const [hours, setHours] = useState(false);
  const [days, setDays] = useState(false);

  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=3&aqi=no&alerts=no`;

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(URL)
          .then(response => {
            setWeatherData(response.data);
            console.log(response.data)
          })
          .catch(err => console.log(err));
          setLocation('');
  }
  return (
    <div className="app">
      <form className="search">
        <h2>MyWeather App</h2>
        <div className="search_group">
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            // onKeyPress={searchLocation}
            placeholder='Enter Location'
            type="text" 
          />
          <button onClick={handleSearch} type='submit' className="search_btn">
            <BsSearch className="search_icon" />
          </button>
        </div>
      </form>
      <div className="container">
        <div className="top_content">
          <div className="main_info">
            <div className="main_top">
              <h1 className="temp">{weatherData?.current?.temp_c}<span>°C</span></h1>
              <div>
                <img src={weatherData?.current?.condition?.icon} alt="" />
                <p>{weatherData?.current?.condition?.text}</p>
              </div>
            </div>
            <div className="location_name">
              <h2>{weatherData?.location?.name}</h2>
              <p>{weatherData?.location?.country}</p>
            </div>
          </div>
          <div className="time_container">
            <h3>{weatherData?.location?.localtime?.slice(10, 16)}</h3>
            <p>{weatherData?.location?.localtime?.slice(0, 10)}</p>
          </div>
        </div>
        <div className="bottom_content">
          <ul className="forecast_menu">
            <li><button className="forecast_btn">Today's forecast</button></li>
            <li><button className="forecast_btn">Hourly forecast</button></li>
            <li><button className="forecast_btn">Daily forecast</button></li>
          </ul>
          <div className="extra_info">
            <Today weatherData={weatherData
            }/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
