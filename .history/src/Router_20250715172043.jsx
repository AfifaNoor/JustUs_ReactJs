import react from 'react';
import {createBrowserRouter , createRoutesFromElements , Route, Router } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const Router =  createBrowserRouter(
    createRoutesFromElememnts(
        <>
            <Route path='/' element={<HomePage/>}/>
            <Route path='login-page' element= {<LoginPage/>}/>
        </>
    )
)

export default Router;