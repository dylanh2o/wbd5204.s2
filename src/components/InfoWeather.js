import React from 'react';
import {useSelector} from "react-redux";

const InfoWeather = () => {
	const data = useSelector(state => state.weather.weather[0]);
	var date=new Date();
	var heureFormat=(date.getHours()+":"+date.getMinutes());
var imgWeather="http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
	return (
		<div>

			<br/>
			{data.main.temp}°C
			<br/>
			{data.main.temp_min}°C|	{data.main.temp_max}°C
			<br/>
			<img src={imgWeather} alt="Weather" />
			<br/>
			{data.weather[0].description}
			<br/>
{data.name}
<br/>
			{heureFormat}

		</div>
	)
};

export default InfoWeather;