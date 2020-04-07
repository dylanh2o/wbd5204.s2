import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
const dataWeather=[];
export const fetchInfoweather = createAsyncThunk(
	'home/fetchInfoweather',
	async () => {
		const request = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Geneva,CH&units=metric&lang=fr&appid=a89d6186113e2e58907bf91a553e6628', {
			method: 'GET',
		});
		const data = await request.json();
		console.log(data);
		dataWeather.push(data);
		return dataWeather;
	});

export const InfoSlice = createSlice({
	name: 'weather',
	initialState: {
		state: 'loading',
		error: null,
		weather: []
	},
	reducers: {},
	extraReducers: {
		[fetchInfoweather.pending]: (state, action) => {
			if (state.state !== 'loading') {
				state.state = 'loading';
			}
		},
		[fetchInfoweather.fulfilled]: (state, action) => {
			if (state.state === 'loading') {
				state.state = 'ready';
				state.weather = action.payload;
			}
		},
		[fetchInfoweather.rejected]: (state, action) => {
			if (state.state === 'loading') {
				state.state = 'error';
				state.error = action.error.message;

			}
		}

	}
});


export default InfoSlice.reducer;

