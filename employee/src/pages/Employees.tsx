import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { Props, state } from '../models/Employees';
import { fetchEmployees } from '../store/action-creators'
import List from '../components/List';
import Status from '../components/Status';
import Header from '../components/Header';
import '../styles/Employee.css';

const Employees: React.FC<Props> = ({ employeesList, fetchEmployees }) => {

    useEffect(() => {
        fetchEmployees();
    }, [fetchEmployees]);

    return <div className='employee'>
        <Header />
        <ul>
            {employeesList.map((employee) => <List key={employee.id} employee={employee} />)}
        </ul>
        <hr className='hr' />
        <Status />
    </div>;
};

const mapStateToProps = (state: state) => {
    return {
        employeesList: state.employee.employeesList
    }
}

export default connect(mapStateToProps, { fetchEmployees })(Employees);