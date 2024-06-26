import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './loginSignUp.css';

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);
        try {
            const response = await signInWithPopup(auth, new GoogleAuthProvider());
            const user = response.user;
            const token = await user.getIdToken(); 
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/react-app/home');
        } catch (error) {
            console.log(error);
            setAuthing(false);
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const token = await user.getIdToken(); 
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/react-app/home");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="overlay">
            <form onSubmit={handleSubmit} className='login-form'> 
                <p>Login</p>
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Your Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className='login-button'>Login</button> 
                <p className="center-text">Need to Signup? <Link to="/react-app/signup">Create Account</Link></p>
                <button className="login-with-google-btn" onClick={() => signInWithGoogle()} disabled={authing}>
                    Sign in with Google
                </button>
            </form>
        </div>
    );
}

export default LoginPage;


// import React, { useState } from 'react';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { Link, useNavigate } from 'react-router-dom';
// import './loginSignUp.css'

// export interface ILoginPageProps {}

// const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
//     const auth = getAuth();
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [authing, setAuthing] = useState(false);

//     const signInWithGoogle = async () => {
//         setAuthing (true);
//         signInWithPopup (auth, new GoogleAuthProvider())
//         .then(response => {
//             console.log(response.user.uid);
//             navigate('/react-app/home');
//         })
//         .catch(error => {
//             console.log(error);
//             setAuthing(false);
//         });
        
//     }
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//           const userCredential = await signInWithEmailAndPassword(auth, email, password);
//           console.log(userCredential);
//           const user = userCredential.user;
//           const token = await user.getIdToken(); 
//           localStorage.setItem('token', token);
//           localStorage.setItem('user', JSON.stringify(user));
//           navigate("/react-app/home");
//         } catch (error) {
//           console.error(error);
//         }
//       }
//       return (

//         <div className="overlay">
            
//             <form onSubmit={handleSubmit} className='login-form'> 
//             <p>Login</p>
//         <input
//           type="email"
//           placeholder="Your Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Your Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" className='login-button'>Login</button> 
//         <p className="center-text">Need to Signup? <Link to="/react-app/signup">Create Account</Link></p>
//         <button className="login-with-google-btn" onClick={() => signInWithGoogle()} disabled={authing}>
//         Sign in with Google
//         </button>
//       </form>
           
//         </div>
//     );
// }
// export default LoginPage;