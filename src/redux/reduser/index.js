import { combineReducers } from 'redux';
import employee from './EmployeeReduser';

export default combineReducers({
    employee: employee
});