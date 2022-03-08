import { Action } from '../actions';
import { ActionType } from '../action-types';

interface employee {
    id: number,
    name: string,
    status: string
}

interface EmployeeState {
    employeesList: string[],
    newEmployee: {},
    selectedEmployee: employee,
    selectedEmployeeSuccess: boolean,
    changeEmployeeInfo: employee,
};

const initialState: EmployeeState = {
    employeesList: [],
    newEmployee: {},
    selectedEmployee: {
        id: 0,
        name: '',
        status: ''
    },
    selectedEmployeeSuccess: false,
    changeEmployeeInfo: {
        id: 0,
        name: '',
        status: ''
    },
};

const employeeReducer = (state: EmployeeState = initialState, action: Action) => {
    switch (action.type) {
        case (ActionType.FETCH_EMPLOYEES):
            return {
                ...state,
                employeesList: action.payload,
            }
        case (ActionType.ADD_EMPLOYEE):
            return {
                ...state,
                addNewEmployee: action.payload
            }
        case (ActionType.FETCH_EMPLOYEES_BY_ID):
            return {
                ...state,
                selectedEmployee: action.payload,
                selectedEmployeeSuccess: true
            }
        case (ActionType.CHANGE_EMPLOYEE_INFO):
            return {
                ...state,
                changeEmployeeInfo: action.payload,
            }
        default:
            return {
                ...state
            }
    }
};

export default employeeReducer;