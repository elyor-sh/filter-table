import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Layout from "./components/layout";
import CarsPage from './pages/cars'
import CarsCreatePage from './pages/cars-create'


function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="" element={<Navigate to='/cars'/>}/>
                <Route path="cars" element={<CarsPage/>}/>
                <Route path="cars/create" element={<CarsCreatePage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
