import { ActionType } from '../action-types';

export interface FetchEmployeeAction {
    type: ActionType.FETCH_EMPLOYEES,
    payload: {
        id: number,
        name: string,
        status: string
    }
};

export interface AddEmployeeAction { 
    type: ActionType.ADD_EMPLOYEE,
    payload: {
        id: number,
        name: string,
        status: string
    }
};

export interface FetchEmployeeByIdAction {
    type: ActionType.FETCH_EMPLOYEES_BY_ID,
    payload: {
        id: number
    }
};

export interface ChangeEmployeeIdAction {
    type: ActionType.CHANGE_EMPLOYEE_INFO,
    payload: {
        id: number,
        name: string,
        status: string
    }
};

export type Action =
    | FetchEmployeeAction
    | AddEmployeeAction
    | FetchEmployeeByIdAction
    | ChangeEmployeeIdAction;