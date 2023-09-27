import {alertsSlice} from './alertsSlice';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    alerts: alertsSlice.reducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;