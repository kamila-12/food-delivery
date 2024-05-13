import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './loginSignUp.css'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigate = useNavigate();
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
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
       
        <form onSubmit={handleSubmit} className='signup-form'>
        <p>Signup Page</p>
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
          <button type="submit" className='signup-button'>Signup</button>
          <p>Need to Login? <Link to="/react-app/login">Login</Link></p>
        </form>
        
      </div>
    )
  }
  
  export default Signup


