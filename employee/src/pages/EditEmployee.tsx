import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchEmployeeById, changeEmployeeInfo } from '../store/action-creators';
import { employee, state, editEmployeeProps } from '../models/EditEmployee';
import '../styles/Employee-form.css'

const EditEmployee: React.FC<editEmployeeProps> = ({ changeEmployeeInfo, fetchEmployeeById, selectedEmployeeSuccess, selectedEmployee }) => {

    const initialState = {
        id: 0,
        name: '',
        status: ''
    }

    const navigate = useNavigate();
    const { id } = useParams();

    const [employee, setEmployee] = useState<employee>(initialState);
    const [nameErr, setNameErr] = useState<boolean>(false);
    const [statusErr, setStatusErr] = useState<boolean>(false);

    useEffect(() => {
        fetchEmployeeById(Number(id));
    }, [fetchEmployeeById, id]);

    useEffect(() => {
        if (selectedEmployeeSuccess) {
            setEmployee(selectedEmployee)
        }
    }, [selectedEmployeeSuccess, selectedEmployee]);

    useEffect(() => {

        if (employee.name.length > 0) {
            setNameErr(false);
        } 

        if (employee.status.length > 0) {
            setStatusErr(false);
        } 

    }, [nameErr, statusErr, employee.name.length, employee.status.length])

    const editEmployeeHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if (employee.name.length && employee.status.length > 0) {
            setNameErr(false);
            setStatusErr(false);
            changeEmployeeInfo(employee, Number(id));
            navigate("/");
        } else {
            setNameErr(true);
            setStatusErr(true);
            return;
        }
    }

    return <div className='employee-form'>
        <h1 style={{ marginTop: 0, textTransform: 'capitalize', marginBottom: '50px' }}>edit employee</h1>
        <form onSubmit={editEmployeeHandler}>
            <div className='employee-name'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' value={employee.name} onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
                {nameErr && <span style={{ color: 'red', marginTop: '12px', display: 'inline-block', fontSize: '14px' }}>Please enter a valid name</span>}
            </div>
            <div className='employee-status'>
                <label htmlFor='status'>Status</label>
                <input type='text' id='status' value={employee.status} onChange={(e) => setEmployee({ ...employee, status: e.target.value })} />
                {statusErr && <span style={{ color: 'red', marginTop: '12px', display: 'inline-block', fontSize: '14px' }}>Please enter a valid status</span>}
            </div>
            <div className='employee-save-btn'>
                <button>Save</button>
            </div>
        </form>
    </div>;
};

const mapStateToProps = (state: state) => {
    return {
        selectedEmployee: state.employee.selectedEmployee,
        selectedEmployeeSuccess: state.employee.selectedEmployeeSuccess
    }
}

export default connect(mapStateToProps, { fetchEmployeeById, changeEmployeeInfo })(EditEmployee);