import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom';


import Dashboard from '../pages/Dashboard';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Register from '../pages/Register'
import ResetPassword from "../pages/ResetPassword"

export default function MainRoutes(){


    return (
        <Routes>
            <Route path='/Register' element={<Register />}/>
            <Route path='/ResetPassword' element={<ResetPassword />}/>
            <Route path='/' element={<Login />}/>            
            <Route path='/Dashboard' element={<Dashboard />}/>
            <Route path='/Detail/:id' element={<Detail />}/>          
        </Routes>
    )
}
