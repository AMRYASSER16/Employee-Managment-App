export type state = {
    employee: {
        selectedEmployee: {
            id: number,
            name: string,
            status: string
        },
        selectedEmployeeSuccess: boolean
    }
};

export type employee = {
    id: number,
    name: string,
    status: string
};

export type editEmployeeProps = {
    changeEmployeeInfo: (employee: employee, id: number) => void;
    fetchEmployeeById: (id: number) => void,
    selectedEmployeeSuccess: boolean,
    selectedEmployee: employee,
}