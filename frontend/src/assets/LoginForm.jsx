import { useState } from 'react';
import axios from 'axios';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password
            });

            if (response.data.success) {
                alert('Login successful');
                // Redirect user or store user info in state if needed
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='SignInForm'>
            <label htmlFor="email">Email Address</label>
            <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required className='SignInFormInput' placeholder='Enter Your Email' />

            <label htmlFor="password">Password</label>
            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required className='SignInFormInput SignInPassword' placeholder='Enter Your Password' />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type="submit" className='SignInButton'>Log In</button>
        </form>
    );
}

export default LoginForm;
