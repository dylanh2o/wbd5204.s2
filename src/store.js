import {applyMiddleware, combineReducers, configureStore} from '@reduxjs/toolkit';
import {connectRouter, routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from 'history'
import InfoSlice from './components/InfoSlice';


const reducers = history => combineReducers({
	router: connectRouter(history),
	weather: InfoSlice,


});
export const history = createBrowserHistory();

export default configureStore({
	reducer: reducers(history),
	mw: applyMiddleware(routerMiddleware(history))
});
