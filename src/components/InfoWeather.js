import React from 'react';
import {List} from 'antd';
import {useSelector} from "react-redux";

const InfoWeather = () => {
	const data = useSelector(state => state.weather.weather);

	return (
		<div>

			<List
				itemLayout="horizontal"
				dataSource={data}
				renderItem={item => (

					<List.Item>
						<List.Item.Meta
					//		avatar={<Link to={'/Currency/' + item.asset_id}><Avatar src={item.url}/></Link>}
						//	title={<Link to={'/Currency/' + item.asset_id}>{item.name}</Link>}

						/>
ztest
					</List.Item>
				)}
			/>
		</div>
	)
};

export default InfoWeather;