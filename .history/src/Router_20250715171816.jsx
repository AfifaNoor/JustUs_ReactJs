import react from 'react';
import {createBrowserRouter , createRoutesFromElememnts , Route, Router } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const ROuter =  createBrowserRouter(
    createRoutesFromElememnts(
        <>
            <Route path='/' element={<HomePage/>}/>
            <Route path='login-page' element= {<LoginPage/>}/>
        </>
    )
)

export default Router;