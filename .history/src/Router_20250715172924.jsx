import react from 'react';
import {createBrowserRouter , createRoutesFromElements , Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const Router =  createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<HomePage/>}/>
            <Route path='login-page' element= {<LoginPage/>}/>
        </>
    )
)

export default Router;