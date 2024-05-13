
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import LoginPage from './pages/login/login';
import Signup from './pages/login/signup'
import { initializeApp } from "firebase/app";
import { config } from './config/config';
import AuthRoute from './components/AuthRoutes';
import './App.css'
import StoreContextProvider from './context/StoreContext.tsx';
import Navbar from './components/navbar/navbar'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/order/order'

initializeApp(config.firebaseConfig);

export interface IApplicationProps {}


const App: React.FunctionComponent<IApplicationProps> = () => {
    return (
      
            <BrowserRouter>
             <StoreContextProvider> 
             <Navbar/>
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
                    <Route path="/react-app/cart" element={<Cart />} />
                    <Route path="/react-app/order" element={<PlaceOrder />} />
                </Routes>
                <Footer />
                </StoreContextProvider> 
            </BrowserRouter>
       
    );
};
export default App;
