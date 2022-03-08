import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employees from '../pages/Employees';
import NewEmployee from '../pages/NewEmployee'
import EditEmployee from '../pages/EditEmployee'

const navigation: React.FC<any> = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Employees />} />
                <Route path="/new-employee" element={<NewEmployee />} />
                <Route path='/edit-employee/:id' element={<EditEmployee />} />
            </Routes>
        </Router>
    );
};

export default navigation;