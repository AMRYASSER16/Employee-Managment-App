import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from '../models/List';
import '../styles/List.css';

const List: React.FC<Props> = ({ employee }) => {

    const { name, status, id } = employee;
    
    return <>
        <li className='employee-list'>
            <div className='employee-info'>
                <div className='employee-col'>
                    <span className='employee-title'>name:</span> <br />
                    <span className='employee-name'>{name}</span>
                </div>
                <div className='employee-col'>
                    <span className='employee-status'>status:</span> <br /> 
                    <span className='status'> {status}</span>
                </div>
            </div>
            <div className='employee-edit-btn'>
                <Link className='button' to={`/edit-employee/${id}`}>edit</Link>
            </div>
        </li>
    </>;
}; 

export default List;