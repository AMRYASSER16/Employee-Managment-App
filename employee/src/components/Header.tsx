import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
    return <div className='header'>
        <div>
            <h2>Employees</h2>
            <Link className='button' to='/new-employee'>add new employee</Link>
        </div>
    </div>;
}

export default Header; 