import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Layout from "./components/layout";

const CarsPage = React.lazy(() => import('./pages/cars'))
const CarsCreatePage = React.lazy(() => import('./pages/cars-create'))

function App() {
    return (
        <React.Suspense fallback={<></>}>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="" element={<Navigate to='/cars'/>}/>
                    <Route path="cars" element={<CarsPage/>}/>
                    <Route path="cars/create" element={<CarsCreatePage/>}/>
                </Route>
            </Routes>
        </React.Suspense>
    );
}

export default App;
