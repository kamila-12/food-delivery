import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface IAuthRouteProps {
    children?: React.ReactNode;
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false); 
            if (!user) {
                console.log('unauthorized');
                // navigate('/login'); // Перенаправляем только если пользователь неавторизован
            }
        });

        return () => unsubscribe(); 
    }, [auth, navigate]);

    if (loading) return <p>loading ...</p>;

    return <>{children}</>
};

export default AuthRoute;
