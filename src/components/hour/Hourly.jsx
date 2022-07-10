import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './Hourly.css'


const Hourly = ({weatherData}) => {
  const data = weatherData?.forecast?.forecastday[0].hour.map(item => item.temp_c)

  // const temp = data.map(item => item[0]) 


  // console.log(data.map(item => item.temp_c))

  console.log(data)
  // console.log(temp)

  return (
    <div className='hourly'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Hourly
