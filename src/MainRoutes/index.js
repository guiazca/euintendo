import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Detail from '../pages/Detail';

export default function MainRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/Detail/:id' element={<Detail />}/>
        </Routes>
    )
}
