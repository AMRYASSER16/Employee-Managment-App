export type Props = {
    employeesList: {
        id: number;
        name: string;
        status: string;
    }[],
};
export type state = {
    employee: {
        employeesList: {
            id: number,
            name: string,
            status: string
        }[]
    }
};

export type employee = {
    id: number,
    name: string,
    status: string
}