import React from 'react';
import {useSelector} from "react-redux";
import {EnvironmentOutlined,ClockCircleOutlined,SettingOutlined} from '@ant-design/icons';
const InfoWeather = () => {
	const data = useSelector(state => state.weather.weather[0]);
	var date = new Date();
	var heureFormat = (date.getHours() + ":" + date.getMinutes());
	var imgWeather = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
	return (
		<div className="container">
			<div className="center">
				<div className="tempContainer">
					<div className="temp">{data.main.temp}°C</div>

					<div className="tempMinMax">{data.main.temp_min}°C| {data.main.temp_max}°C</div>
				</div>
				<div className="tempWeather">
					<img src={imgWeather} alt="Weather"/>
					<br/>
					{data.weather[0].description}
				</div>
			</div>
			<div className="cityHours">
				<EnvironmentOutlined />{data.name}
				<br/>
				<ClockCircleOutlined />{heureFormat}
			</div>
			<SettingOutlined />
		</div>
	)
};

export default InfoWeather;