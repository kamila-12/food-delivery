
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import LoginPage from './pages/login/login';
import Signup from './pages/login/signup'
import { initializeApp } from "firebase/app";
import { config } from './config/config';
import AuthRoute from './components/AuthRoutes';
import './App.css'

initializeApp(config.firebaseConfig);

export interface IApplicationProps {}


const App: React.FunctionComponent<IApplicationProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    path="/react-app/home/"
                    element={
                        <AuthRoute>
                            <HomePage />
                        </AuthRoute>
                    }
                />
                <Route path="/react-app/login" element={<LoginPage />} />
                <Route path="/react-app/signup" element={<Signup />} />
            </Routes>
            
        </BrowserRouter>
    );
};
export default App
