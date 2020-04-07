import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const fetchInfoweather = createAsyncThunk(
	'home/fetchInfoweather',
	async () => {

//recuperer toutes les info des crypto
		const request = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Geneva&appid=a89d6186113e2e58907bf91a553e6628', {
			method: 'GET',

		});

		const data = await request.json();
console.log(data);
	});

export const InfoSlice = createSlice({
	name: 'weather',
	initialState: {
		state: 'loading',
		error: null,
		currency: []
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
				state.currency = action.payload;
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

