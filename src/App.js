import React, {useState, useEffect} from 'react';
import InfoWeather from './components/InfoWeather'
import store from './store';
import {Provider,useDispatch} from 'react-redux';
import 'antd/dist/antd.min.css';


import {fetchInfoweather} from "./components/InfoSlice";
const App = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			await dispatch(fetchInfoweather());
			setLoading(false);

		})();
	}, []);
	return loading ? 'Loading...' : (
		<>
			<div>
				<InfoWeather/>
			</div>

		</>
	);
};

const AppContainer = () => (
	<Provider store={store}>
			<App/>
	</Provider>
);

export default AppContainer;