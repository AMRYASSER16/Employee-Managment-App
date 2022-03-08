import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addEmployee } from '../store/action-creators';
import { useNavigate } from 'react-router-dom';
import { Props, employee } from '../models/NewEmployee';
import '../styles/Employee-form.css'

const NewEmployee: React.FC<Props> = ({ addEmployee }) => {

    const initialState = {
        id: 0,
        name: '',
        status: ''
    }

    const navigate = useNavigate();

    const [employee, setEmployee] = useState<employee>(initialState);
    const [nameErr, setNameErr] = useState<boolean>(false);
    const [statusErr, setStatusErr] = useState<boolean>(false);

    useEffect(() => {

        if (employee.name.length > 0) {
            setNameErr(false);
        } 

        if (employee.status.length > 0) {
            setStatusErr(false);
        } 

    }, [nameErr, statusErr, employee.name.length, employee.status.length])

    const newEmployeeHandler = (e: React.FormEvent) => {

        e.preventDefault();

        if (employee.name.length && employee.status.length > 0) {
            addEmployee(employee);
            setNameErr(false);
            setStatusErr(false);
            navigate("/")
        } else {
            setNameErr(true);
            setStatusErr(true);
            return;
        }

    }

    return <div className='employee-form'>
        <h1 style={{ marginTop: 0, textTransform: 'capitalize', marginBottom: '50px' }}>add new employee</h1>
        <form onSubmit={newEmployeeHandler}>
            <div className='employee-name'>
                <label htmlFor='name'>Name</label> <br />
                <input type='text' id='name' value={employee.name} placeholder='Examples: John, Alexandra' onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
                {nameErr && <span style={{ color: 'red', marginTop: '12px', display: 'inline-block', fontSize: '14px' }}>Please enter a valid name</span>}
            </div>
            <div className='employee-status'>
                <label htmlFor='status'>Status</label> <br />
                <input type='text' id='status' value={employee.status} placeholder='Examples: Approved, In-check' onChange={(e) => setEmployee({ ...employee, status: e.target.value })} />
                {statusErr && <span style={{ color: 'red', marginTop: '12px', display: 'inline-block', fontSize: '14px' }}>Please enter a valid status</span>}
            </div>
            <div className='employee-save-btn'>
                <button>Save</button>
            </div>
        </form>
    </div>;
}

export default connect(null, { addEmployee })(NewEmployee); 