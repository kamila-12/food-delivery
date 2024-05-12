import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

export interface IHomePageProps {}
import ExploreMenu from '../../components/exploreMenu/exploreMenu';
import FoodDisplay from '../../components/foodDisplay/foodDisplay'

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
    const [category, setCategory] = useState("All");

    return (
        <div>
            <p>Home Page (Protected by Firebase!)</p>
            
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
          
          <ExploreMenu category={category} setCategory={setCategory}/>
          <FoodDisplay category={category} />
        </div> 
    );
};

export default HomePage;



