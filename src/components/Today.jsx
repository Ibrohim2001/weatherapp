import React from 'react';
import '../App.css';
import { FiSunrise, FiSunset } from 'react-icons/fi'



const Today = ({weatherData}) => {

  return (
    <div className='todays_info'>
      <div className="left">
        <h4>Feels like <span>{weatherData?.current?.feelslike_c} °C</span></h4>
        <h4>Humidity <span>{weatherData?.current?.humidity} %</span></h4>
        <h4>Pressure <span>{weatherData?.current?.pressure_mb} mb</span></h4>
        <h4>Wind <span>{weatherData?.current?.wind_kph} kph</span></h4>
      </div>
      <div className="right">
        <div className="card">
          <FiSunrise className='sun_icon'/>
          <h3>Sunrise</h3>
          <p>{weatherData?.forecast?.forecastday[0].astro.sunrise}</p>
        </div>
        <div className="card">
          <FiSunset className='sun_icon'/>
          <h3>Sunset</h3>
          <p>{weatherData?.forecast?.forecastday[0].astro.sunset}</p>
        </div>
      </div>
    </div>
  )
}

export default Today