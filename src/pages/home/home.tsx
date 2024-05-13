import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
    const [user, setUser] = useState<any>(null); // Устанавливаем тип any для переменной пользователя
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        const userString = localStorage.getItem('user');
        const currentUser = userString ? JSON.parse(userString) : null;
        setUser(currentUser);
    }, []);

    const handleLogout = async () => {
        try {
          await signOut(auth);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate("/react-app/login");
        } catch (error) {
          console.error(error);
        }
    }

    return (
        <div>
            <p>Home Page (Protected by Firebase!)</p>
            <h1>Welcome to React Firebase Auth using email and password</h1>
            {user ? (
                <div>
                    <h2>{user.email}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    
                    
                </div>
            )}
            <Link to="/react-app/login">Login</Link>
        </div> 
    );
};

export default HomePage;



