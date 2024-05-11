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
    const [loading, setLoading] = useState(true); // Устанавливаем loading в true в начале

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false); // Устанавливаем loading в false после завершения проверки авторизации
            if (!user) {
                console.log('unauthorized');
                // navigate('/login'); // Перенаправляем только если пользователь неавторизован
            }
        });

        return () => unsubscribe(); // Отменяем подписку при размонтировании компонента
    }, [auth, navigate]);

    if (loading) return <p>loading ...</p>; // Отображаем загрузочное сообщение пока идет проверка авторизации

    return <>{children}</>; // Рендерим дочерние компоненты, если загрузка завершена
};

export default AuthRoute;
