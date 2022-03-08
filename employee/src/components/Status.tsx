import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Props, state, employee } from '../models/Status';
import List from '../components/List';
import '../styles/Status.css';

const Status: React.FC<Props> = ({ employeesList }) => {

    const [status, setStatus] = useState<string>('');
    const [employeeList, setEmployeeList] = useState<employee[]>(employeesList);

    useEffect(() => {
        // using switch to compare to one value only;
        switch (status) {
            // handle case added
            case 'added':
                // using {} to allow javascript know that it's a block scope const;
                // create only one array and update it based on the condition
                // using break; to avoid the switch case from execute another conditions
                {
                    setStatus('added');
                    const addedListEmployeeStatus = employeesList.filter((employee: employee) => employee.status === 'added');
                    setEmployeeList(addedListEmployeeStatus);
                    break;
                }
            // handle case incheck
            case 'incheck':
                {
                    setStatus('incheck');
                    const addedListEmployeeStatus = employeesList.filter((employee: employee) => employee.status === 'incheck');
                    setEmployeeList(addedListEmployeeStatus);
                    break;
                }
            // handle case approved
            case 'approved':
                {
                    setStatus('approved');
                    const addedListEmployeeStatus = employeesList.filter((employee: employee) => employee.status === 'approved');
                    setEmployeeList(addedListEmployeeStatus);
                    break;
                }
            // handle case active
            case 'active':
                {
                    setStatus('active');
                    const addedListEmployeeStatus = employeesList.filter((employee: employee) => employee.status === 'active');
                    setEmployeeList(addedListEmployeeStatus);
                    break;
                }
            // handle case inactive
            case 'inactive':
                {
                    setStatus('inactive');
                    const addedListEmployeeStatus = employeesList.filter((employee: employee) => employee.status === 'inactive');
                    setEmployeeList(addedListEmployeeStatus);
                    break;
                }
            // handle case default
            default:
                {
                    setStatus('added')
                    const addedListEmployeeStatus = employeesList.filter((employee: employee) => employee.status === 'added');
                    setEmployeeList(addedListEmployeeStatus);
                    break;
                }
        }
    }, [status, employeesList]);

    const employeeListStatusHandler = () => {
        return <ul>
            {employeeList.map((employee: employee) => {
                return <List key={employee.id} employee={employee} />
            })}
        </ul>
    }

    return <div className='status'>
        <div className='status-buttons'>
            <button className={`${status === 'added' ? 'active' : ''}`} onClick={() => setStatus('added')}>
                {status === 'added' && <span className='status-bk'></span>}
                <span>added</span>
            </button>
            <button className={`${status === 'incheck' ? 'active' : ''}`} onClick={() => setStatus('incheck')}>
                {status === 'incheck' && <span className='status-bk'></span>}
                <span>incheck</span>
            </button>
            <button className={`${status === 'approved' ? 'active' : ''}`} onClick={() => setStatus('approved')}>
                {status === 'approved' && <span className='status-bk'></span>}
                <span>approved</span>
            </button>
            <button className={`${status === 'active' ? 'active' : ''}`} onClick={() => setStatus('active')}>
                {status === 'active' && <span className='status-bk'></span>}
                <span>active</span>
            </button>
            <button className={`${status === 'inactive' ? 'active' : ''}`} onClick={() => setStatus('inactive')}>
                {status === 'inactive' && <span className='status-bk'></span>}
                <span>inactive</span>
            </button>
        </div>
        {employeeList.length > 0 && <div className='status-content'>
            {status === 'added' && <div className='employee-type'>
                <span className='employees-number'>employees: {employeeList.length}</span>
                {employeeListStatusHandler()}
            </div>
            }
            {status === 'incheck' && <div className='employee-type'>
                <span className='employees-number'>employees: {employeeList.length}</span>
                {employeeListStatusHandler()}
            </div>
            }
            {status === 'approved' && <div className='employee-type'>
                <span className='employees-number'>employees: {employeeList.length}</span>
                {employeeListStatusHandler()}
            </div>
            }
            {status === 'active' && <div className='employee-type'>
                <span className='employees-number'>employees: {employeeList.length}</span>
                {employeeListStatusHandler()}
            </div>
            }
            {status === 'inactive' && <div className='employee-type'>
                <span className='employees-number'>employees: {employeeList.length}</span>
                {employeeListStatusHandler()}
            </div>
            }
        </div>}
        {/* handle no employees exist */}
        {employeeList.length === 0 && <div style={{ textAlign: 'center', marginTop: '50px', textTransform: 'capitalize' }}>
            <h3>No employee founded</h3>
        </div>}
    </div>;
}
const mapStateToProps = (state: state) => {
    return {
        employeesList: state.employee.employeesList
    }
}

export default connect(mapStateToProps)(Status);