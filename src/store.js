import {combineReducers, configureStore} from '@reduxjs/toolkit';
import InfoSlice from './components/InfoSlice';


const reducers = () => combineReducers({

	weather: InfoSlice,


});


export default configureStore({
	reducer: reducers(),

});
