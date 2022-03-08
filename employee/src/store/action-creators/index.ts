import { ActionType } from '../action-types';
import {
  FetchEmployeeAction,
  AddEmployeeAction,
  FetchEmployeeByIdAction,
  ChangeEmployeeIdAction
} from '../actions';
import employees from '../../apis/employees';

export interface employee {
  id: number,
  name: string,
  status: string
};

export const fetchEmployees = () => async (dispatch: (arg: FetchEmployeeAction) => (FetchEmployeeAction)) => {
  const response = await employees.get<employee>('/employees');
  dispatch({ type: ActionType.FETCH_EMPLOYEES, payload: response.data });
};

export const addEmployee = (employee: employee) => async (dispatch: (arg: AddEmployeeAction) => (AddEmployeeAction)) => {
  const response = await employees.post<employee>('/employees', employee);
  dispatch({ type: ActionType.ADD_EMPLOYEE, payload: response.data });
};

export const fetchEmployeeById = (id: number) => async (dispatch: (arg: FetchEmployeeByIdAction) => (FetchEmployeeByIdAction)) => {
  const response = await employees.get<employee>(`/employees/${id}`);
  dispatch({ type: ActionType.FETCH_EMPLOYEES_BY_ID, payload: response.data });
};

export const changeEmployeeInfo = (employee: employee, id: number) => async (dispatch: (arg: ChangeEmployeeIdAction) => (ChangeEmployeeIdAction)) => {
  const response = await employees.patch<employee>(`/employees/${id}`, employee);
  dispatch({ type: ActionType.CHANGE_EMPLOYEE_INFO, payload: response.data });
};