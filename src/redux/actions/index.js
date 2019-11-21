import { CHECK_USER, FETCH_EMPLOYEES_DATA } from './types';
import employeeJsonData from './employeesdata';

export  const checkUser = (data) => ({
  type: CHECK_USER,
  payload: data
});
export const fetchEmployeesData = () => {
  return (dispatch) => {
   return dispatch({
      type: FETCH_EMPLOYEES_DATA,
      payload: employeeJsonData.user
    })
  }
};