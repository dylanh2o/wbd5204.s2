import React, {useState, useEffect} from 'react';
import InfoWeather from './components/InfoWeather'
import 'antd/dist/antd.min.css';

const App = () => {

	const [loading, setLoading] = useState(true);
	useEffect(() => {
				setLoading(false);
	}, []);


	return loading ? 'Loading...' : (
		<>
			<div>
Hello
			</div>

		</>
	);
};

export default App;