export type Props = { 
    employeesList: {
        id: number,
        name: string,
        status: string
    }[],
    fetchEmployees: () => void,
};

export type state = {
    employee: {
        employeesList: {
            id: number,
            name: string,
            status: string
        }[],
    },
}