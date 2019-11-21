import { CHECK_USER, FETCH_EMPLOYEES_DATA } from '../actions/types';
const initialState = {
    userData: {
        "username": "hruday@gmail.com",
        "password": 'hruday123'
    },
    employeesData: [],
    isUser: false
};
const employeeReduser = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_USER:
        console.log("fdfds"+JSON.stringify(action))
            if (action.payload.username === state.userData.username && action.payload.password === state.userData.password) {
                state.isUser = true;
                return {...state}
            } 
                return {...state}
          
        
        case FETCH_EMPLOYEES_DATA:
            console.log("reduser" + action.payload)
            state.employeesData = action.payload
            return { ...state };
        default:
            return state;
    }
}
export default (employeeReduser);