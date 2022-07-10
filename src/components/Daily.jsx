import React from 'react';
import '../App.css';

const Daily = ({weatherData}) => {
  console.log(weatherData?.forecast)
  return (
    <div className='daily_info'>
      {weatherData?.forecast?.forecastday.map((item, index) => (
        <div className='day' key={index}>
          <p className='forecast_date'>{item.date}</p>
          <p className='daily_temp'>{item.day.avgtemp_c} °C</p>
          <div className='daily_condition'>
            <p>{item.day.condition.text}</p>
            <img src={item.day.condition.icon} alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Daily