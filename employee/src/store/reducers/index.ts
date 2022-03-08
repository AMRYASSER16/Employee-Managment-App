import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';

const reducers = combineReducers({
    employee: employeeReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;