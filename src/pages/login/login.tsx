import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing (true);
        signInWithPopup (auth, new GoogleAuthProvider())
        .then(response => {
            console.log(response.user.uid);
            navigate('/');
        })
        .catch(error => {
            console.log(error);
            setAuthing(false);
        });
        
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          console.log(userCredential);
          const user = userCredential.user;
          const token = await user.getIdToken(); 
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          navigate("/");
        } catch (error) {
          console.error(error);
        }
      }
    

    return (

        <div>
            <p>Login page</p>
            <form onSubmit={handleSubmit} className='login-form'>
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
      </form>
      <p>Need to Signup? <Link to="/react-app/signup">Create Account</Link></p>

            <button className="login-with-google-btn" onClick={() => signInWithGoogle()} disabled={authing}>
                Sign in with Google
            </button>
        </div>
    );


}
export default LoginPage;