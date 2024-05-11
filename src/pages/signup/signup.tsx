import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';


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
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  
    return (
      <div>
        <h1>Signup Page</h1>
        <form onSubmit={handleSubmit} className='signup-form'>
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
        </form>
        <p>Need to Login? <Link to="/login">Login</Link></p>
      </div>
    )
  }
  
  export default Signup


// const [email, setEmail] = useState('')
// const [password1, setPassword1] = useState('')




// import { useHistory } from 'react-router-dom';
// import React, { useState } from 'react';
// import IPageProps from '../../interfaces/page';
// import { auth } from '../../config/firebase';

// const RegisterPage: React.FunctionComponent<IPageProps> = props => {

//     const [authenticating, setAuthenticating] = useState<boolean>(false);
//     const [email, setEmail] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const [error, setError] = useState<string>('');

//     const history = useHistory();
//     const signInWithEmailAndPassword = () => {
//         if (password !== confirm) setError('Please make sure your password matchv ')
//         if (error !== '') setError('');
//         setRegistering(true);

//         auth.createUserWithEmailAndPassword(email, password)
//         .then(result => {
            
//         })
//         .catch(error => {
            
//         });
//     }

//     return (
//         <p>Register page.</p>
//     );
// }

// export default RegisterPage;