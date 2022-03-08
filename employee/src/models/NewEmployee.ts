export type Props = {
    addEmployee: (employee: employee) => void
};

export type employee = {
    id: number,
    name: string,
    status: string
}